const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const Users = require("../models/Users");
const {
  filterByEmail,
  findUsers,
  createUser,
} = require("../controllers/users");

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

router.post("/register", async function (req, res) {
  const { password, email } = req.body; //sacar username y puesto

  if (password && email) {
    try {
      const users = await findUsers();
      const checkUserExist = await filterByEmail(users, email); //validar por email
      if (checkUserExist) {
        return res.json({
          status: false,
          msg: "Ya existe una cuenta con ese correo",
        });
      }
      const newUser = await createUser(password, email);
      if (newUser) {
        return res.json({ status: true, msg: "User created succesfully" });
      }
      return res.status(404).status("User could not be created");
    } catch (err) {
      console.error(err);
    }
  }
  res.status(404).send("Incomplete required inputs");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await Users.deleteOne({ _id: id });
    res.status(200).send(userDelete);
  } catch (err) {
    res.status(404).send("Could not delete user");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await Users.deleteOne({ _id: id });
    res.status(200).send(userDelete);
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
