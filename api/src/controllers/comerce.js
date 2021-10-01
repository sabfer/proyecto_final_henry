const Comerce = require("../models/Comerce");

const searchComerces = async () => {
  const comerces = await Comerce.find();
  return comerces.length ? comerces : null;
};

const findByName = async (name) => {
  const list = await searchComerces();
  const filterByName = list.filter((comerce) => {
    return comerce.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  return filterByName.length ? filterByName : null;
};

const createComerce = async function (payload) {
  const newComerce = await new Comerce(payload);
  await newComerce.save();
  return newComerce ? newComerce : null;
};

module.exports = {
  searchComerces,
  findByName,
  createComerce,
};
