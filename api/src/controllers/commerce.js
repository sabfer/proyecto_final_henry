const mongoose = require("mongoose");
const Commerce = require("../models/Commerce");

const searchCommerces = async () => {
  const commerces = await Commerce.find()
    .populate("userId", {
      email: 1,
      _id: 0,
    })
    .populate("typeCommerceId", { name: 1, _id: 0 });
  return commerces.length ? commerces : null;
};

const filterByName = async (name) => {
  const list = await searchCommerces();
  if (!list) return null;
  const filterByName = list.filter((commerce) => {
    return commerce.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  return filterByName.length ? filterByName : null;
};

const findByName = async (name) => {
  const commerce = await Commerce.findOne({ name });
  return commerce;
};

const createCommerce = async function (payload) {
  const newCommerce = await new Commerce(payload);
  await newCommerce.save();
  return newCommerce ? newCommerce : null;
};

const deleteCommerceById = async function (id) {
  const commerceDelete = await Commerce.deleteOne({ _id: `${id}` });
  return commerceDelete.deletedCount === 1 ? true : false;
};

const updateById = async function (id, fieldsToUpdate) {
  const commerceUpdated = await Commerce.findOneAndUpdate(
    { _id: `${id}` },
    fieldsToUpdate,
    { new: true }
  );
  return commerceUpdated ? commerceUpdated : false;
};

module.exports = {
  searchCommerces,
  filterByName,
  createCommerce,
  findByName,
  deleteCommerceById,
  updateById,
};
