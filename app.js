require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const User = require("./models/user");
const flash = require("connect-flash");
const LocalStrategy = require("passport-local");
const nodemailer = require("nodemailer");
// const _ = require('lodash');
require("https").globalAgent.options.rejectUnauthorized = false;

// const bcrypt = require('bcrypt-nodejs');
const async = require("async");
const crypto = require("crypto");

///////   Dependency requirements above    ///////
const dbName = "Ruvaan";
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

const sessionConfig = {
    name: "Ruvaan",
    secret: process.env.sessionConfigSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionConfig));

app.use(flash());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use("/robots.txt", function(req, res, next) {
    res.type("text/plain");
    res.send("User-agent: *\nDisallow: /team_images");
});

// ROUTES
app.get("/", function(req, res) {
    // res.render("home", {});
    res.redirect("/events");
});
app.get("/about", function(req, res) {
    res.render("about", {});
});
app.get("/events", function(req, res) {
    // req.flash("success", "Welcome back!");
    res.render("events", { user: req.user });
});
app.get("/sponsors", function(req, res) {
    //res.render("under_construction", {});
    res.render("sponsors", {});
});
app.get("/faq", function(req, res) {
    res.render("faq", {});
});
app.get("/team", function(req, res) {
    res.render("team", {});
});
app.get("/workshop", function(req, res) {
    res.render("under_construction", {});
});
app.get("/merchandise", function(req, res) {
    res.render("under_construction", {});
});
app.get("/register", function(req, res) {
    res.render("register", {});
});
app.get("/forgot-password/", function(req, res) {
    res.render("forgot_pass");
});
app.get("/reset/:token", function(req, res) {
    User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        },
        function(err, user) {
            if (!user) {
                ("error", "Password reset token is invalid or has expired.");
                return res.redirect("/register");
            } else {
                res.render("reset", {
                    url: "/reset/" + req.params.token,
                });
            }
        }
    );
});
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
////////////////////////////////////////////////////////////////////////////
// POST requests below
////////////////////////////////////////////////////////////////////////////
app.post(
    "/login",
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/register",
    }),
    (req, res) => {
        req.flash("success", "Welcome " + req.user.name + " !");
        res.redirect("/events");
    }
);
app.post("/register", async(req, res) => {
    try {
        const { name, email, phone, password, confirm_password } = req.body;
        // check if pwd === cnf_pwd
        if (!(confirm_password === password)) {
            throw new Error("Password did not match Confirm Password!");
        } else {
            const user = new User({ email: email, name: name, phone: phone }); // make new user

            const registeredUser = await User.register(
                user,
                password,
                function(err, user) {
                    if (err) {
                        console.log(err); // since internal implementation is hidden to user
                    }
                }
            ); // register the new user

            req.login(registeredUser, (err) => {
                req.flash("success", "Welcome " + name + "!");
                res.redirect("/events");
            });
        }
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("register");
    }
});

app.post("/forgot", function(req, res, next) {
    async.waterfall(
        [
            function(done) {
                crypto.randomBytes(22, function(err, buf) {
                    var token = buf.toString("hex");
                    done(err, token);
                });
            },
            function(token, done) {
                User.findOne({ email: req.body.email }, function(err, user) {
                    if (!user) {
                        req.flash("error", "No account with that email address exists.");
                        res.redirect("register");
                    }

                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                    user.save(function(err) {
                        done(err, token, user);
                    });
                });
            },
            function(token, user, done) {
                const reset_url =
                    "\n" + "http://" + req.headers.host + "/reset/" + token + "\n";

                console.log(reset_url);

                async function main() {
                    const forgetful_person = user.email;

                    const nodemailer = require("nodemailer");
                    mailConfig = {
                        host: process.env.mail_host,
                        port: 587,
                        auth: {
                            user: process.env.mail_user,
                            pass: process.env.mail_pass,
                        },
                        tls: {
                            rejectUnauthorized: false,
                        },
                    };
                    let transporter = nodemailer.createTransport(mailConfig);
                    let info = await transporter.sendMail({
                        from: process.env.mail_user,
                        to: forgetful_person,
                        subject: "Password Reset request | Ruvaan'22",
                        // text: 'Dear User,you have been successfully subscribed to mails for Ruvaan.',
                        html: "<h3>Dear User,<br>a password reset request has initiated from your account.</h3><em>To change your password click here, Click the url below:</em><br>" +
                            reset_url +
                            "<br>If you did not request this, please ignore this email and your password will remain unchanged.\n", // html body
                    });
                }
                main().catch(console.error);

                req.flash(
                    "success",
                    "Passsword reset mail sent. Please check your mails"
                );
                // res.redirect('/events');
                res.redirect("/register");
            },
        ],
        function(err) {
            if (err) console.log(err);
            res.redirect("/register");
        }
    );
});
app.post("/reset/:token", function(req, res) {
    // async.waterfall([
    //     function(done) {
    User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        },
        function(err, theuser) {
            if (!theuser) {
                req.flash("error", "Password reset token is invalid or has expired.");
                return res.redirect("back");
            }
            theuser.setPassword(req.body.password, function(err, theuser) {
                if (err) {
                    console.log(err);
                    req.flash("error", "Sorry something went wrong");
                    res.redirect("/register");
                } else {
                    theuser.resetPasswordToken = undefined;
                    theuser.resetPasswordExpires = undefined;
                    theuser.save(function(err) {
                        req.login(theuser, (err) => {
                            req.flash("success", "Password reset successful. Now login!");
                            // res.redirect('/events');
                            res.redirect("/register");
                        });
                    });
                }
            });
        }
    );
    // },
    // ], function(err) {
    //     res.redirect('/');
    // });
});

app.post("/registerEvent", function(req, res) {
    const evName = req.body.eventToRegister;
    if (typeof req.user._id === "undefined") {
        req.flash("error", "Please login before registering");
        res.redirect("/events");
    } else {
        User.findOne({ _id: req.user._id }, function(err, found) {
            if (err) console.log(err);
            else {
                let isPresent = false;
                found.registered_events.forEach((ev) => {
                    if (ev === evName) {
                        isPresent = true;
                    }
                })
                if (isPresent === false) {
                    found.registered_events.push(req.body.eventToRegister);
                    req.flash("success", "Registration Successful!")
                    res.redirect("/events");
                    found.save();
                } else {
                    req.flash("success", "Already registered for this event.")
                    res.redirect("/events");
                }
            }
        });
    }
})

app.post('/contactTeam', function(req, res) {
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    // SMTP Server
    async function main() {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.mail_host,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.mail_user, // generated ethereal user
                pass: process.env.mail_pass, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: ` ${process.env.mail_user}`, // sender address
            to: process.env.convener_mail, // list of receivers
            subject: subject, // Subject line
            text: "From: " + name + "\nEmail: " + email + "\n\n" + message, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});