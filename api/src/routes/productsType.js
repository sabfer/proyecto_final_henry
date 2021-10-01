const express = require("express");
const router = express.Router();
const {
    searchProductType,
    searchTypesProducts,
    filterProductType,
    addProduct
} = require("../controllers/productsType.js");

router.get("/", async function (req, res) {
    const {name} = req.query;
    try{
        if (name){
                const productType = await searchProductType(name);
                productType ? res.send(productType)
                : res.status(404).send("Product type not exists!");
        } else {
                const listProductsTypes = await searchTypesProducts();
                listProductsTypes ? res.send(listProductsTypes)
                : res.status(404).send("Products not exists");
        } 
    } catch (err) {
        console.error(err);
    }
}); 

router.post("/", async function (req, res) {
    const {price, name} = req.body;
    try{
        const newProductType = await filterProductType(name);

        if(newProductType){
            res.status(400).send("Product already exists") 
        }  else {
            const productType = await addProduct(name);
            res.send(productType);    
        }
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;
