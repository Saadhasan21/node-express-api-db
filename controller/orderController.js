const orderModal = require("../modal/Orders");

const storeOrders = async (req, res) => {
  try {
    const Order = await new orderModal(req.body);
    Order.save();

    res.status(201).send(Order);
  } catch (error) { }
};

const getOrders = async (req, res) => {
  try {
    const Orders = await orderModal.find({});
    res.status(200).send(Orders);
  } catch (error) { }
};

const getOrderDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const OrderDetails = await orderModal.findById(_id);
    res.status(200).send(OrderDetails);
  } catch (error) {

  }
};

const updateOrder = async (req, res) => {
  try {
    const _id = req.params.id
    const updateOrder = await orderModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateOrder);

  } catch (error) {

  }
};

const deleteOrder = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteOrder = await orderModal.findByIdAndDelete(_id);
    res.status(200).send(deleteOrder);

  } catch (error) {

  }

};

module.exports = {
  storeOrders,
  getOrders,
  getOrderDetail,
  updateOrder,
  deleteOrder,
};
