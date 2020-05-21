const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
