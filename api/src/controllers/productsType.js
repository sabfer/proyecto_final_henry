const ProductsType = require("../models/ProductsType");

// GETS
const searchProductType = async(name) => {
        const type = await ProductsType.findOne({ name: `${name}`});
        return type ? type : null;
}

const searchTypesProducts = async() => {
        const types = await ProductsType.find();
        return types ? types : null;
}

// POSTS
const filterProductType = async(name) => {
    const product = await ProductsType.findOne({ name: `${name}`});
    return product ? true : false;
}

const addProduct = async(name) => {
    const newProductType = await new ProductsType({
        name
    })
    await newProductType.save();
    return newProductType;
}

module.exports = {
    searchProductType,
    searchTypesProducts,
    filterProductType,
    addProduct
};
