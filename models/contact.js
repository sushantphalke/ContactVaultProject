const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'Personal',
    },
    date: {
        type: String,
        default: Date.now,
    },
});
module.exports = mongoose.model('contact', ContactSchema);
