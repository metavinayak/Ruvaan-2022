require('dotenv').config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
// const _ = require('lodash');
require('https').globalAgent.options.rejectUnauthorized = false;

///////   Dependency requirements above    ///////

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs')

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
//     // callbackURL: "https://iit-mandi-vaccination-database.herokuapp.com/auth/google/secrets",
//     callbackURL: "http://localhost:3000/auth/google/markos",
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
app.get('/', function (req, res) {
  res.render('home',{});
})
app.get('/about', function (req, res) {
  res.render('about',{});
})
app.get('/contact', function (req, res) {
  res.render('contact',{});
})
app.get('/events', function (req, res) {
  res.render('events',{});
})

app.listen(3000||process.env.PORT, function(){
    console.log("Server running on port 3000");
})