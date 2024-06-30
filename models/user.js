const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type:  String,
        required: true
    }
});

//this will hash and salt the passport itself that's why we added this plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);