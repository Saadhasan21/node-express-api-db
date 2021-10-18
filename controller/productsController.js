const productModal = require("../modal/products");

const storeProducts = async (req, res) => {
  try {
    const product = await new productModal(req.body);
    product.save();

    res.status(201).send(product);
  } catch (error) { }
};

const getProducts = async (req, res) => {
  try {
    const products = await productModal.find({});
    res.status(200).send(products);
  } catch (error) { }
};

const getProductDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const productDetails = await productModal.findById(_id);
    res.status(200).send(productDetails);
  } catch (error) {

  }
};

const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id
    const updateProduct = await productModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateProduct);

  } catch (error) {

  }
};

const deleteProduct = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteProduct = await productModal.findByIdAndDelete(_id);
    res.status(200).send(deleteProduct);

  } catch (error) {

  }

};

module.exports = {
  storeProducts,
  getProducts,
  getProductDetail,
  updateProduct,
  deleteProduct,
};
