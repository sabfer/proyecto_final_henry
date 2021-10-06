const express = require("express");
const router = express.Router();
const controller = require("../controllers/orders");

router.get("/", controller.findOrders);
router.get("/filter", controller.filterOrders);
router.post("/", controller.addOrder);
router.delete("/:id", controller.deleteOrder);
router.put("/:id", controller.updateOrder);

module.exports = router;
