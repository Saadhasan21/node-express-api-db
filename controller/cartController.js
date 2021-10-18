const cartModal = require("../modal/carts");

const storeCarts = async (req, res) => {
  try {
    const Cart = await new cartModal(req.body);
    Cart.save();

    res.status(201).send(Cart);
  } catch (error) { }
};

const getCarts = async (req, res) => {
  try {
    const Carts = await cartModal.find({});
    res.status(200).send(Carts);
  } catch (error) { }
};

const getCartDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const CartDetails = await cartModal.findById(_id);
    res.status(200).send(CartDetails);
  } catch (error) {

  }
};

const updateCart = async (req, res) => {
  try {
    const _id = req.params.id
    const updateCart = await cartModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateCart);

  } catch (error) {

  }
};

const deleteCart = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteCart = await cartModal.findByIdAndDelete(_id);
    res.status(200).send(deleteCart);

  } catch (error) {

  }

};

module.exports = {
  storeCarts,
  getCarts,
  getCartDetail,
  updateCart,
  deleteCart,
};
