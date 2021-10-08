const express = require("express");
const router = express.Router();
const controller = require("../controllers/commerce.js");

router.get("/filters", controller.filtersCommerce);
router.get("/", controller.findCommerce);
router.post("/register", controller.addCommerce);
router.delete("/:id", controller.deleteCommerce);
router.put("/:id", controller.updateCommerce);

module.exports = router;
