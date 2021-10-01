const ComerceType = require("../models/ComerceType");

const createComerceType = async (name) => {
  const newComerceType = await new ComerceType({
    name,
  });
  await newComerceType.save();
  return newComerceType;
};

const searchTypeComerce = async () => {
  const results = await ComerceType.find();
  return results.length ? results : null;
};

const searchTypeComerceByName = async (name) => {
  const list = await searchTypeComerce();
  const filterByName = list.filter((type) => {
    return type.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  return filterByName.length ? filterByName : null;
};

const updateComerceType = async (id, name) => {
  const comerceType = await ComerceType.findOneAndUpdate(
    { _id: `${id}` },
    { name },
    { new: true }
  );
  return comerceType ? comerceType : false;
};

const deleteTypeComerce = async (id) => {
  const typeDelete = await ComerceType.deleteOne({ _id: `${id}` });
  return typeDelete.deletedCount === 1 ? true : false;
};

module.exports = {
  createComerceType,
  searchTypeComerceByName,
  searchTypeComerce,
  updateComerceType,
  deleteTypeComerce,
};
