const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const Users = require("../models/Users");
const {
  filterByEmail,
  findUsers,
  createUser,
  deleteUserById,
  updateById,
} = require("../controllers/users");

const { verifyInputsToUpdate } = require("../controllers/functions");

router.get("/", async function (req, res) {
  const { userEmail } = req.query;
  try {
    const listUsers = await findUsers();
    if (userEmail) {
      const usersfilterByEmail = await filterByEmail(listUsers, userEmail);
      usersfilterByEmail
        ? res.status(200).json(usersfilterByEmail)
        : res.status(404).json({
            status: false,
            msg: "No users with that email were found",
          });
    } else {
      listUsers
        ? res.status(200).json(listUsers)
        : res.status(404).json({ status: false, msg: "No users found" });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/register", async function (req, res) {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const users = await findUsers();
      const checkUserExist = await filterByEmail(users, email);
      if (checkUserExist) {
        return res
          .status(404)
          .send({ status: false, msg: "User already exists" });
      }
      const newUser = await createUser(password, email);
      if (newUser) {
        return res
          .status(200)
          .json({ status: true, msg: "User created succesfully" });
      }
      return res
        .status(404)
        .json({ status: false, msg: "User could not be created" });
    } catch (err) {
      console.error(err);
    }
  }
  res.status(404).json("Incomplete required inputs");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await deleteUserById(id);
    userDelete
      ? res.status(200).json({ status: true, msg: "User delete succesfully" })
      : res.status(404).json({ status: false, msg: "Cannot delete user" });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body;
  if (verifyInputsToUpdate(fieldsToUpdate, ["email", "password"])) {
    try {
      const userUpdated = await updateById(id, fieldsToUpdate);
      if (userUpdated) {
        return res
          .status(200)
          .json({ status: true, msg: "User updated successfully!" });
      }
      return res
        .status(404)
        .json({ status: false, msg: "The user could not be modified" });
    } catch (err) {
      return res.status(404).json({ status: false, msg: err });
    }
  }
  res
    .status(404)
    .json({ status: false, msg: "The fields to modify are not valid" });
});

module.exports = router;
