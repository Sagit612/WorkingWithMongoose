const mongoose = require('mongoose');

const OrderItemSchem = mongoose.Schema(
    {
        orderId: {type: mongoose.Schema.Types.ObjectId, ref: "Orders", required: true},
        itemId: {type: mongoose.Schema.Types.ObjectId, ref: "Items", required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true},
        quantity: {type: Number, default: 1, required: true},
        price: {type: Number, required: true},
        isPaid: {type: Boolean, default: false},
    },
    {
        timestamps: true,
    }
);