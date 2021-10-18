const rolesModal = require("../modal/roles");

const storeroles = async (req, res) => {
  try {
    const roles = await new rolesModal(req.body);
    roles.save();

    res.status(201).send(roles);
  } catch (error) { }
};

const getroles = async (req, res) => {
  try {
    const roles = await rolesModal.find({});
    res.status(200).send(roles);
  } catch (error) { }
};

const getroleDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const roles = await rolesModal.findById(_id);
    res.status(200).send(roles);
  } catch (error) {

  }
};

const updaterole = async (req, res) => {
  try {
    const _id = req.params.id
    const updateroles = await rolesModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateroles);

  } catch (error) {

  }
};

const deleterole = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteroles = await rolesModal.findByIdAndDelete(_id);
    res.status(200).send(deleteroles);

  } catch (error) {

  }

};

module.exports = {
  storeroles,
  getroles,
  getroleDetail,
  updaterole,
  deleterole,
};
