const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  product: String,
  user: String,
  product_qty: Number,
  base_price: Number,
  sell_price:Number,
  total_price:Number,
});

const cartModal = mongoose.model("carts", CartSchema);

module.exports = cartModal;
