const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user_id: String,
  total_items: Number,
  products:Array,
  billing_address: String,
  shipping_address: String,
  transaction_status:Boolean,
  payment_mode:String,
  payment_status:Boolean,
  order_status:String,
});

const orderModal = mongoose.model("orders", orderSchema);

module.exports = orderModal;
