const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Orders = require("../models/Orders");
const User = require("../models/Users");
const Product = require("../models/Products");
const Client = require("../models/Clients");

router.get("/", async function (req, res) {
  const ordersRes = await Orders.find()
    .populate("userId", { username: 1, post: 1 })
    .populate("clientId", { name: 1, phone: 1 })
    .populate("products", { name: 1, price: 1 });
  res.send(ordersRes);
});

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

router.delete("/:id", async function(req, res) {
  const {id} = req.params;
  try{
      await Orders.deleteOne({_id:id});
      res.send('Order deleted successfully!');
  } catch (err) {
      console.log(err);
  }
})

module.exports = router;
