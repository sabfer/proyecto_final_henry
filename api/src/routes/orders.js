const express = require("express");
const router = express.Router();
const controller = require("../controllers/orders");

router.get("/", controller.findOrders);
router.post("/", controller.add);
router.delete("/:id", controller.deleteOrder);

module.exports = router;
