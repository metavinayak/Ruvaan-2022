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
    registered_events: {
        "Recon": {
            type: String,
            default: "unregistered"
        },
        "Twist a Tale": {
            type: String,
            default: "unregistered"
        },
        "Poetry Slam": {
            type: String,
            default: "unregistered"
        },
        "General Quiz": {
            type: String,
            default: "unregistered"
        },
        "Stand up Comedy": {
            type: String,
            default: "unregistered"
        },
        "Biggest Liar": {
            type: String,
            default: "unregistered"
        },
        "Literary Quiz": {
            type: String,
            default: "unregistered"
        },
        "Secret Event": {
            type: String,
            default: "unregistered"
        },
        "Meme Wars": {
            type: String,
            default: "unregistered"
        },
        "Fan Fiction": {
            type: String,
            default: "unregistered"
        },
        "Bazinga": {
            type: String,
            default: "unregistered"
        },
        "Review Your Favourites": {
            type: String,
            default: "unregistered"
        },
        "MUN": {
            type: String,
            default: "unregistered"
        },
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);