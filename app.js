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
// const _ = require('lodash');
require("https").globalAgent.options.rejectUnauthorized = false;

///////   Dependency requirements above    ///////

const app = express();
app.use(express.static("public"));
// app.use(express.static(require('path').join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.use("/robots.txt", function(req, res, next) {
    res.type("text/plain");
    res.send("User-agent: *\nDisallow: /team_images");
});
// app.use(session({
//     secret : process.env.SECRET,
//     resave : false,
//     saveUninitialized : false
// }));

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
app.get("/register", function(req, res) {
    res.render("register", {});
});
// Subscription or Contact form submission
app.post("/subscribe", (req, res) => {
    console.log(req.body);

    // SMTP Server
    async function main() {
        const subscriber = req.body.email;

        // create reusable transporter object using the default SMTP transport
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
            to: subscriber,
            subject: "Successfully Subscribed | Ruvaan'22",
            // text: 'Dear User,you have been successfully subscribed to mails for Ruvaan.',
            html: "<h3>Dear User,you have been successfully subscribed to mails for Ruvaan.</h3><em>In order to unsubscribe,Click <a href='../unsubscribe'>here</a></em>", // html body
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});