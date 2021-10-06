const Products = require("../models/Products");

// GETS
const searchProduct = async (name) => {
  const product = await Products.findOne({ name: `${name}` });
  return product ? product : null;
};

const searchProducts = async () => {
  const products = await Products.find();
  return products ? products : null;
};

// POSTS
const filterProduct = async (name) => {
  const product = await Products.findOne({ name: `${name}` });
  return product ? true : false;
};

const addProduct = async (payload) => {
  const newProduct = await new Products(payload);
  await newProduct.save();
  return newProduct ? newProduct : null;
};

// DELETE
const deleteProduct = async (id) => {
  const deleted = await Products.deleteOne({ _id: `${id}` });
  return deleted ? true : false;
};

// UPDATE/PUT
const updateProduct = async (id, update) => {
  const updated = await Products.findOneAndUpdate({ _id: `${id}` }, update, {
    new: true,
  });
  console.log(updated);
  return updated ? true : false;
};

module.exports = {
  searchProduct,
  searchProducts,
  filterProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
