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
// const _ = require('lodash');
require("https").globalAgent.options.rejectUnauthorized = false;

///////   Dependency requirements above    ///////
const dbName = "Ruvaan"
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
// passport.use(new LocalStrategy(User.authenticate()));

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
app.get("/contact", function(req, res) {
    res.render("contact", {});
});
app.get("/events", function(req, res) {
    req.flash("success", "Welcome back!");
    res.render("events", {});

});
app.get("/sponsors", function(req, res) {
    res.render("under_construction", {});
    // res.render("sponsors", {});
});
app.get("/faq", function(req, res) {
    res.render("faq", {});
});
app.get("/team", function(req, res) {
    res.render("team", {});
});
// app.get("/workshop", function(req, res) {
//     res.render("workshop", {});
// });
// app.get("/merchandise", function(req, res) {
//     res.render("merchandise", {});
// });
app.get("/workshop", function(req, res) {
    res.render("under_construction", {});
});
app.get("/merchandise", function(req, res) {
    res.render("under_construction", {});
});
app.get("/register", function(req, res) {
    res.render("register", {});
});

// POST requests below

app.post("/login",
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/register",
    }),
    (req, res) => {
        req.flash("success", "Welcome back!");
        res.redirect('/events');
    }
);
app.post("/register", async(req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const user = new User({ email: email, name: name, phone: phone });
        const registeredUser = await User.register(user, password, function(err, user) {
            if (err) { console.log(err) }
        });
        req.login(registeredUser, err => {
            req.flash('success', 'Welcome!');
            res.redirect('/events');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
});

// Subscription or Contact form submission
// app.post("/subscribe", (req, res) => {
//     console.log(req.body);

//     // SMTP Server
//     async function main() {
//         const subscriber = req.body.email;

//         // create reusable transporter object using the default SMTP transport
//         const nodemailer = require("nodemailer");

//         mailConfig = {
//             host: process.env.mail_host,
//             port: 587,
//             auth: {
//                 user: process.env.mail_user,
//                 pass: process.env.mail_pass,
//             },
//             tls: {
//                 rejectUnauthorized: false,
//             },
//         };
//         let transporter = nodemailer.createTransport(mailConfig);
//         let info = await transporter.sendMail({
//             from: process.env.mail_user,
//             to: subscriber,
//             subject: "Successfully Subscribed | Ruvaan'22",
//             // text: 'Dear User,you have been successfully subscribed to mails for Ruvaan.',
//             html: "<h3>Dear User,you have been successfully subscribed to mails for Ruvaan.</h3><em>In order to unsubscribe,Click <a href='../unsubscribe'>here</a></em>", // html body
//         });
//         console.log("Message sent: %s", info.messageId);
//         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     }
//     main().catch(console.error);
//     res.redirect("/");
// });

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});