const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Clients = require("../models/Clients");

router.get("/", async function (req, res) {
  const listClients = await Clients.find();
  res.send(listClients);
});

router.post("/", async function (req, res) {
  const { name, phone, direction } = req.body;

  const client = await new Clients({
    name,
    phone,
    direction,
  });

  await client.save();
  res.send(client);
});

module.exports = router;
