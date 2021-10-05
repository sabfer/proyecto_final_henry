const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Orders = require("../models/Orders");

router.get("/", async function (req, res) {
  try {
    const ordersRes = await Orders.find({}).populate({
      path: "products",
      populate: { path: "product", select: { name: 1, price: 1, _id: 0 } },
    });
    if (ordersRes.length) {
      res.send(ordersRes);
    }
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async function (req, res) {
  const payload = req.body;

  const order = await new Orders({
    ...payload,
    date: new Date(),
  });

  await order.save();
  res.send(order);
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    await Orders.deleteOne({ _id: id });
    res.send("Order deleted successfully!");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
