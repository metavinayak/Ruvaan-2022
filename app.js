require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const flash = require("connect-flash");
// const _ = require('lodash');
require("https").globalAgent.options.rejectUnauthorized = false;

///////   Dependency requirements above    ///////

// Connecting to local datatabse
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
// app.use(express.static(require('path').join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.use("/robots.txt", function (req, res, next) {
    res.type("text/plain");
    res.send("User-agent: *\nDisallow: /team_images");
});

const sessionConfig = {
    name: "Ruvaan",
    secret: "thisshouldbeabettersecret!",
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

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/Ruvaan", {useNewUrlParser: true,useUnifiedTopology: true,});
// mongoose.connect(String(process.env.PASS),{ useNewUrlParser: true , useUnifiedTopology: true});

// Create DB schema here

// userSchema.plugin(passportLocalMongoose,{
//     usernameField : "username"
// });
// userSchema.plugin(findOrCreate);

// const User = mongoose.model("user", userSchema);

// passport.use(User.createStrategy())

////////  Creating sessions and serializing   //////////
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

////////Google OAuth 2.0 Strategy/////////
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/ruvaan22",
//     userProfileUrl : "https://www.googleapis.com.oauth2.v3.userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ username: profile.id},
//         {
//             name : profile._json.name,
//             pic : profile._json.picture,
//             email: profile._json.email
//         },
//         function (err, user) {
//         console.log(profile.displayName);
//       return cb(err, user);
//     });
//   }
// ));

// ROUTES
app.get("/", function (req, res) {
    // res.render("home", {});
    res.redirect("/events");
});
app.get("/about", function (req, res) {
    res.render("about", {});
});
app.get("/contact", function (req, res) {
    res.render("contact", {});
});
app.get("/events", function (req, res) {
    res.render("events", {});
});
app.get("/sponsors", function (req, res) {
    res.render("sponsors", {});
});
app.get("/faq", function (req, res) {
    res.render("faq", {});
});
app.get("/team", function (req, res) {
    res.render("team", {});
});
app.get("/workshop", function (req, res) {
    res.render("workshop", {});
});
app.get("/merchandise", function (req, res) {
    res.render("merchandise", {});
});
app.get("/register", (req, res) => {
    res.render("users/register");
});
app.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            req.flash('success', 'Welcome!');
            res.redirect('/events');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
});
app.get("/login", (req, res) => {
    res.render("users/login");
});
app.post(
    "/login",
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login",
    }),
    (req, res) => {
        req.flash("success", "Welcome back!");
        res.render('events');
    }
);

// Subscription or Contact form submission
app.post("/subscribe", (req, res) => {
    console.log(req.body);

    // SMTP Server
    async function main() {
        const subscriber = req.body.email;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "", // generated ethereal user
                pass: process.env.mailPASS, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "", // sender address
            to: subscriber, // list of receivers
            subject: "Subscription", // Subject line
            text: "Hello world", // plain text body
            html: "You are subscribed", // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000");
});
