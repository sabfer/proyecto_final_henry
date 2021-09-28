const express = require("express")
const mongoose = require('mongoose');
const router = express.Router()

const Products = require("../models/Products");

router.get("/", async function (req, res) {
    const listProducts = await Products.find();
    res.send(listProducts); 
}); 


router.post("/", async function (req, res) {

    const {price, type} = req.body;

    const product = await new Products({
        price,
        type,
    })

    await product.save();
    res.send(product);
})

module.exports = router;