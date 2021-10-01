const Products = require("../models/Products");
const ProductType = require("../models/ProductsType");

// GETS
const searchProduct = async(name) => {
        const product = await Products.findOne({ name: `${name}`});
        return product ? product : null;
}

const searchProducts = async() => {
        const products = await Products.find()
        .populate("productType", { name: 1 })
        return products ? products : null;
}

// POSTS
const filterProduct = async(name) => {
    const product = await Products.findOne({ name: `${name}`});
    return product ? true : false;
}

const addProduct = async(price, name, productType) => {
    const type = await ProductType.findOne({ name: productType});

    const newProduct = await new Products({
        price, 
        name,
        productType: type
    })
    await newProduct.save();
    return newProduct;
}

// DELETE
const deleteProduct = async(id) => {
    const deleted = await Products.deleteOne({_id: `${id}`});
    return deleted ? true : false;
}

// UPDATE/PUT
const updateProduct = async(id, update) => {
    const updated = await Products.findOneAndUpdate({_id: id} , update, {new:true})
    return updated ? true : false;
}


module.exports = {
    searchProduct,
    searchProducts,
    filterProduct,
    addProduct,
    deleteProduct,
    updateProduct
};