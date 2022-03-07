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
    registeration : [String],
    resetPasswordToken: String,
    resetPasswordExpires: Date
});
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);