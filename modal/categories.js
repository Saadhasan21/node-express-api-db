const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
});

const categoryModal = mongoose.model("categories", categorySchema);

module.exports = categoryModal;
