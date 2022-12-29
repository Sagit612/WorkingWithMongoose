const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        address: String,
        isTeamOrder: {type: Boolean, default: true},
        isOrderLock: {type: Boolean, default: false},
        status: {type: String, default: ""},
        deliveryPrice: {type: Number, default: 0},
        isDelivery: {type: Boolean, default: false},
        userId:{type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true}
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Orders", OrderSchema);