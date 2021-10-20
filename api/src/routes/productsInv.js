const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsInv.js");
const auth = require("../controllers/auth.js");

router.use(auth.secret); // todas las rutas autenticadas

router.get("/", controller.getProductsInv);
router.post("/", controller.addProductInv);
router.delete("/:id", controller.deleteProductInv);
router.put("/:id", controller.updateProductInv);

module.exports = router;
