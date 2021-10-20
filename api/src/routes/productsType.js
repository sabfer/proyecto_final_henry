const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsType.js");

router.get("/", controller.findProductsType);
//router.get("/:name", controller.findProductType);
router.post("/new", controller.addProductType);
router.delete("/:id", controller.deleteProductType);
//router.put("/:id", controller.updateProductType);

module.exports = router;