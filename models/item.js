const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        image: {type: String, required: true},
        trademarkId: {}
    },
    {
        timestamps: true,
    }
);