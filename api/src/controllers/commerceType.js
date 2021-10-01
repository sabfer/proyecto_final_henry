const CommerceType = require("../models/CommerceType");

const createCommerceType = async (name) => {
  const newCommerceType = await new CommerceType({
    name,
  });
  await newCommerceType.save();
  return newCommerceType;
};

const searchTypeCommerce = async () => {
  const results = await CommerceType.find();
  return results.length ? results : null;
};

const searchTypeCommerceByName = async (name) => {
  const list = await searchTypeCommerce();
  const filterByName = list.filter((type) => {
    return type.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  return filterByName.length ? filterByName : null;
};

const updateCommerceType = async (id, name) => {
  const commerceType = await CommerceType.findOneAndUpdate(
    { _id: `${id}` },
    { name },
    { new: true }
  );
  return commerceType ? commerceType : false;
};

const deleteTypeCommerce = async (id) => {
  const typeDelete = await CommerceType.deleteOne({ _id: `${id}` });
  return typeDelete.deletedCount === 1 ? true : false;
};

module.exports = {
  createCommerceType,
  searchTypeCommerceByName,
  searchTypeCommerce,
  updateCommerceType,
  deleteTypeCommerce,
};
