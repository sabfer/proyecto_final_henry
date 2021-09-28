const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Orders = require("../models/Orders");
const User = require("../models/Users");
const Product = require("../models/Products");
const Client = require("../models/Clients");

router.get("/", async function (req, res) {
  Orders.find({}, function (err, orders) {
    User.populate(orders, { path: "orders" }, function (err, orders) {
      res.status(200).send(orders);
    });
  });
});

router.post("/", async function (req, res) {
  const { products, clientId, userId, typeOrder } = req.body;

  const product = await Product.find({ type: products });
  const client = await Client.findById(clientId);
  const user = await User.findById(userId);

  const order = await new Orders({
    date: new Date(),
    products: product,
    clientId: client,
    userId: user,
    typeOrder,
  });

  await order.save();
  res.send(order);
});

module.exports = router;
