const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Products = require("../models/Products");



router.get("/", async function (req, res) {

    const {name} = req.query;

    if (name){
        try{
            const product = await Products.findOne({ name:name });
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
    const {price, name} = req.body;
    try{
        const searchProduct = await Products.findOne({name:name});

        if(searchProduct){
            res.status(400).send("Product already exists") 
        }  else {
            const product = await new Products({
                price,
                name,
            })
            await product.save();
            res.send(product);    
        }
        
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;
