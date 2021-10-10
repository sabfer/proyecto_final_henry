const express = require("express");
const router = express.Router();
const controller = require("../controllers/userCategory");

router.get("/", controller.findCategorys);
router.post("/", controller.addCategory);
// router.delete("/:id", controller.deleteOrder);
// router.put("/:id", controller.updateOrder);

module.exports = router;
