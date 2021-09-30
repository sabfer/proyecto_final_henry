const mongoose = require("mongoose");
const Users = require("../models/Users");

const findUsers = async () => {
  const results = await Users.find();
  return results.length ? results : null;
};

const filterByEmail = async (list, email) => {
  const filterByEmail = list.filter((user) => {
    return user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase());
  });
  return filterByEmail.length ? filterByEmail : null;
};

const createUser = async function (password, email) {
  const newUser = await new Users({
    password,
    email,
  });
  await newUser.save();
  return newUser ? newUser : null;
};

const deleteUserById = async function (id) {
  await Users.deleteOne({ _id: `${id}` });
};

module.exports = {
  findUsers,
  filterByEmail,
  createUser,
  deleteUserById,
};
