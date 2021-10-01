const express = require("express");
const router = express.Router();
const {
  searchProduct,
  searchProducts,
  filterProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.js");

router.get("/", async function (req, res) {
  const { name } = req.query;
  try {
    if (name) {
      const product = await searchProduct(name);
      product
        ? res.send(product)
        : res
            .status(404)
            .json({ status: false, msg: "Product whit that name not exists!" });
    } else {
      const listProducts = await searchProducts();
      listProducts
        ? res.status(200).json(listProducts)
        : res.status(404).json({ status: false, msg: "Products not exists" });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async function (req, res) {
  const { price, name } = req.body;
  try {
    const newProduct = await filterProduct(name);

    if (newProduct) {
      res.status(404).json({ status: false, msg: "Product already exists" });
    } else {
      const product = await addProduct(price, name);
      res.status(200).json(product);
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const eliminated = await deleteProduct(id);
    eliminated
      ? res
          .status(200)
          .json({ status: true, msg: "Product deleted successfully!" })
      : null;
  } catch (err) {
    res.status(400).json({ status: false, msg: "Product not exists" });
  }
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const productsUpdate = req.body;

  try {
    const update = await updateProduct(id, productsUpdate);
    update
      ? res
          .status(200)
          .json({ status: true, msg: "Product updated successfully!" })
      : null;
  } catch (err) {
    res.status(404).json({ status: false, msg: "Product not exist" });
  }
});

module.exports = router;
