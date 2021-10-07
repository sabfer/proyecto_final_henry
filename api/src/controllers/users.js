const mongoose = require("mongoose");
const Users = require("../models/Users");

const findUsers = async () => {
  const results = await Users.find();
  return results.length ? results : null;
};

const findUniqueUser = async (email) => {
  const results = await Users.find({email: email});
  return results.length ? results : null;
};

const filterByEmail = async (email) => {
  const list = await findUsers();
  const filterByEmail = list.filter((user) => {
    return user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase());
  });
  return filterByEmail.length ? filterByEmail : null;
};

const findByEmail = async (userEmail) => {
  const usuario = await Users.findOne({ email: userEmail });
  return usuario;
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
  const userDelete = await Users.deleteOne({ _id: `${id}` });
  return userDelete.deletedCount === 1 ? true : false;
};

const updateById = async function (id, fieldsToUpdate) {
  const userUpdated = await Users.findOneAndUpdate(
    { _id: `${id}` },
    fieldsToUpdate,
    { new: true }
  );
  return userUpdated ? userUpdated : false;
};

module.exports = {
  findUsers,
  filterByEmail,
  findByEmail,
  createUser,
  deleteUserById,
  updateById,
  findUniqueUser,
};
