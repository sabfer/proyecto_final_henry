const express = require("express")
const mongoose = require('mongoose');
const router = express.Router()

const Products = require("../models/Products");

router.get("/", async function (req, res) {
    const {type} = req.query;

    if (type){
        try{
            const product = await Products.findOne({ type:type });
            product ? res.send(product)
            : res.status(404).send("Product not exists");
        } catch(err){
            console.error(err);
        }
    }
    else {
        try {
            const listProducts = await Products.find();
            listProducts ? res.send(listProducts)
            : res.status(404).send("Products not exists");
        } catch (err) {
            console.error(err);
        }
    }
}); 

router.post("/", async function (req, res) {
    try{
        const {price, type} = req.body;
        const product = await new Products({
            price,
            type,
        })
        await product.save();
        product && product
        ? res.status(400).send("The product already exists")
        : res.send(product);
    } catch (err) {
        console.log(err);
    }
})

/* router.delete("/", async function (req, res) {

    const 

}) */

module.exports = router;