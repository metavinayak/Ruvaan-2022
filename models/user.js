const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    phone: {
        type: String,
        required: true,
        // unique: true,
    },
    registered_events:{
        Recon : {
            type : String,
            default : "unregistered"
        },
        Twist_a_Tale : {
            type : String,
            default : "unregistered"
        },
        Poetry_Slam : {
            type : String,
            default : "unregistered"
        },
        General_Quiz : {
            type : String,
            default : "unregistered"
        },
        StandZup_Comedy : {
            type : String,
            default : "unregistered"
        },
        Biggest_Liar : {
            type : String,
            default : "unregistered"
        },
        Literary_Quiz : {
            type : String,
            default : "unregistered"
        },
        Secret_Event : {
            type : String,
            default : "unregistered"
        },
        Meme_Wars : {
            type : String,
            default : "unregistered"
        },
        FanZFiction : {
            type : String,
            default : "unregistered"
        },
        Bazinga : {
            type : String,
            default : "unregistered"
        },
        Review_Your_Favourites : {
            type : String,
            default : "unregistered"
        },
        MUN : {
            type : String,
            default : "unregistered"
        },
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);