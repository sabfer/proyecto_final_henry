const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const Users = require("../models/Users");
const { filterByName, findUsers } = require("../controllers/users");

router.get("/", async function (req, res) {
  const { userName } = req.query;
  try {
    const listUsers = await findUsers();
    if (userName) {
      const usersfilterByName = await filterByName(listUsers, userName);
      usersfilterByName
        ? res.status(200).send(usersfilterByName)
        : res.status(404).send("No users with that name were found");
    } else {
      listUsers
        ? res.status(200).send(listUsers)
        : res.status(404).send("No users found");
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async function (req, res) {
  const { password, username, email, post } = req.body;

  if (password && username && email && post) {
    try {
      const user = await new Users({
        password,
        username,
        email,
        post,
      });
      await user.save();
      return res.status(200).send(user);
    } catch (err) {
      console.error(err);
    }
  }
  res.status(404).send("Incomplete required inputs");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Users.deleteOne({ _id: id });
    res.status(200).send("User deleted successfully!");
  } catch (err) {
    res.status(404).send("Could not delete user");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const fieldsUpdate = req.body;

  try {
    const updateUser = await Users.findOneAndUpdate({ _id: id }, fieldsUpdate, {
      new: true,
    });
    updateUser
      ? res.status(200).send("User updated successfully!")
      : res.status(404).send("Could not updated user");
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
