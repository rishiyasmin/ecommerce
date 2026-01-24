const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    price: { type: Number, required: true },   // price

    image: { type: String, required: true },   // image url

    description: String,

    rating: { type: Number, default: 0 },      // ⭐ rating

    quantity: { type: Number, default: 1 }     // 🔢 quantity
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
