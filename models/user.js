const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        fullname: String,
        image: {type: String, default: ""},
        roleId: {type: mongoose.Schema.Types.ObjectId, ref: "Roles"},
        orderId: {type: mongoose.Schema.Types.ObjectId, ref: "Orders"},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Users', UserSchema);