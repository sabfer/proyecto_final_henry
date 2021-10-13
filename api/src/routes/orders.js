const express = require("express");
const router = express.Router();
const controller = require("../controllers/orders");

const auth = require("../controllers/auth.js");
router.use(auth.secret);    // todas las rutas autenticadas

router.get("/", controller.findOrders);
router.get("/active", controller.findActiveOrders);
router.get("/filter", controller.filterOrders);
router.post("/", controller.addOrder);
router.delete("/:id", controller.deleteOrder);
router.put("/:id", controller.updateOrder);

module.exports = router;
