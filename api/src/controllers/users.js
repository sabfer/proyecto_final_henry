const mongoose = require("mongoose");
const Users = require("../models/Users");

const findUsers = async () => {
  const results = await Users.find();
  return results.length ? results : null;
};

const filterByName = async (list, name) => {
  const filterByName = list.filter((user) => {
    return user.username.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  return filterByName.length ? filterByName : null;
};

module.exports = {
  findUsers,
  filterByName,
};
