const CategoriesModal = require("../modal/categories");

const storeCategories = async (req, res) => {
  try {
    const Category = await new CategoriesModal(req.body);
    Category.save();

    res.status(201).send(Category);
  } catch (error) { }
};

const getCategories = async (req, res) => {
  try {
    const Categories = await CategoriesModal.find({});
    res.status(200).send(Categories);
  } catch (error) { }
};

const getCategoryDetail = async (req, res) => {
  try {
    const _id = req.params.id
    const categoryDetail = await CategoriesModal.findById(_id);
    res.status(200).send(categoryDetail);
  } catch (error) {

  }
};

const updateCategory = async (req, res) => {
  try {
    const _id = req.params.id
    const updateCategory = await CategoriesModal.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateCategory);

  } catch (error) {

  }
};

const deleteCategory = async (req, res) => {

  try {
    const _id = req.params.id
    const deleteCategory = await CategoriesModal.findByIdAndDelete(_id);
    res.status(200).send(deleteCategory);

  } catch (error) {

  }

};

module.exports = {
  storeCategories,
  getCategories,
  getCategoryDetail,
  updateCategory,
  deleteCategory,
};
