const express = require("express")
const mongoose = require('mongoose');
const router = express.Router()

const Users = require("../models/Users");

router.get("/", async function (req, res) {
    const listUsers = await Users.find();
    res.send(listUsers);
}); 


router.post("/", async function (req, res) {

    const {password, username, email, post} = req.body;

    const user = await new Users({
        password,
        username,
        email,
        post,
    })

    await user.save();
    res.send(user);
})

module.exports = router;