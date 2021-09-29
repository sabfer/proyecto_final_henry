const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Orders = require("../models/Orders");
const User = require("../models/Users");
const Product = require("../models/Products");
const Client = require("../models/Clients");

router.get("/", async function (req, res) {
  // Orders.find({}, function (err, orders) {
  //   User.populate(orders, { path: "userId" }, function (err, orders) {
  //     res.status(200).send(orders);
  //   });
  // });
  const ordersRes = await Orders.findById("6153908a792719e3339ab8d2") //find({})
    .populate("userId", { username: 1, post: 1 })
    .populate("clientId", { name: 1, phone: 1 })
    .populate("products", { type: 1, price: 1 }); //type = > name
  res.send(ordersRes);
});

// router.get("/", async function (req, res) {
//   Orders.find()
//     .populate("users")
//     .exec(function (err, order) {
//       if (err) console.log(err);
//       res.send(order);
//     });
// });

router.post("/", async function (req, res) {
  const { products, clientId, userId, typeOrder } = req.body;

  const product = await Product.find({ name: products });
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
