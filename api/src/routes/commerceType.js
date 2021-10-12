const express = require("express");
const router = express.Router();
const controller = require("../controllers/commerceType.js");

const auth = require("../controllers/auth.js");
router.use(auth.secret);    // todas las rutas autenticadas

router.get("/filter", controller.filtersCommerceType);
router.get("/", controller.findCommerceType);
router.post("/register", controller.addCommerceType);
router.delete("/:id", controller.deleteCommerceType);
router.put("/:id", controller.updateCommerceType);

module.exports = router;
