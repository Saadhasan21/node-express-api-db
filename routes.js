const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./controller/userControoler");

Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/:id", getuserDetail);
Router.put("/users/:id", updateuser);
Router.delete("/users/:id", deleteUser);


const {
  storeroles,
  getroles,
  getroleDetail,
  updaterole,
  deleterole,
} = require("./controller/rolesController");

Router.get("/roles", getroles);
Router.post("/roles", storeroles);
Router.get("/roles/:id", getroleDetail);
Router.put("/roles/:id", updaterole);
Router.delete("/roles/:id", deleterole);


const {
  storeCategories,
  getCategories,
  getCategoryDetail,
  updateCategory,
  deleteCategory,
} = require("./controller/categoriesController");

Router.get("/categories", getCategories);
Router.post("/categories", storeCategories);
Router.get("/categories/:id", getCategoryDetail);
Router.put("/categories/:id", updateCategory);
Router.delete("/categories/:id", deleteCategory);

module.exports = Router;


const {
  storeTags,
  getTags,
  getTagDetail,
  updateTag,
  deleteTag,
} = require("./controller/tagsController");

Router.get("/tags", getTags);
Router.post("/tags", storeTags);
Router.get("/tags/:id", getTagDetail);
Router.put("/tags/:id", updateTag);
Router.delete("/tags/:id", deleteTag);


const {
  storeProducts,
  getProducts,
  getProductDetail,
  updateProduct,
  deleteProduct,
} = require("./controller/productsController");

Router.get("/products", getProducts);
Router.post("/products", storeProducts);
Router.get("/products/:id", getProductDetail);
Router.put("/products/:id", updateProduct);
Router.delete("/products/:id", deleteProduct);

const {
  storeCarts,
  getCarts,
  getCartDetail,
  updateCart,
  deleteCart,
} = require("./controller/cartController");

Router.get("/carts", getCarts);
Router.post("/carts", storeCarts);
Router.get("/carts/:id", getCartDetail);
Router.put("/carts/:id", updateCart);
Router.delete("/carts/:id", deleteCart);


const {
  storeOrders,
  getOrders,
  getOrderDetail,
  updateOrder,
  deleteOrder,
} = require("./controller/orderController");

Router.get("/orders", getOrders);
Router.post("/orders", storeOrders);
Router.get("/orders/:id", getOrderDetail);
Router.put("/orders/:id", updateOrder);
Router.delete("/orders/:id", deleteOrder);

module.exports = Router;
