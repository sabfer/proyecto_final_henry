const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsType.js");
const auth = require("../controllers/auth.js");

router.use(auth.secret);

router.get("/", controller.findProductsType);
router.post("/new", controller.addProductType);
router.delete("/:id", controller.deleteProductType);

module.exports = router;
