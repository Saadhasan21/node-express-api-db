const userModal = require("../modal/user");

const storeUser = async (req, res) => {
  try {
    const user = await new userModal(req.body);
    user.save();

    res.status(201).send(user);
  } catch (error) { }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModal.find({});
    res.status(200).send(users);
  } catch (error) { }
};

const getuserDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const user = await userModal.findById(_id);
    res.status(200).send(user);
  } catch (error) {

  }
};

const updateuser = async (req, res) => {
  try {
    const _id = req.params.id
    const updateUser = await userModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateUser);

  } catch (error) {

  }
};

const deleteUser = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteUser = await userModal.findByIdAndDelete(_id);
    res.status(200).send(deleteUser);

  } catch (error) {

  }

};

module.exports = {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};
