const TagsModal = require("../modal/tags");

const storeTags = async (req, res) => {
  try {
    const Tag = await new TagsModal(req.body);
    Tag.save();

    res.status(201).send(Tag);
  } catch (error) { }
};

const getTags = async (req, res) => {
  try {
    const Tags = await TagsModal.find({});
    res.status(200).send(Tags);
  } catch (error) { }
};

const getTagDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const tagDetails = await TagsModal.findById(_id);
    res.status(200).send(tagDetails);
  } catch (error) {

  }
};

const updateTag = async (req, res) => {
  try {
    const _id = req.params.id
    const updateTag = await TagsModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateTag);

  } catch (error) {

  }
};

const deleteTag = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteTag = await TagsModal.findByIdAndDelete(_id);
    res.status(200).send(deleteTag);

  } catch (error) {

  }

};

module.exports = {
  storeTags,
  getTags,
  getTagDetail,
  updateTag,
  deleteTag,
};
