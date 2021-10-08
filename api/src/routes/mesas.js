const express = require("express");
const router = express.Router();
const controller = require("../controllers/mesas.js");


router.get("/", controller.findMesas);
router.get("/:numero", controller.findMesaByNum);
router.post("/add", controller.addMesa);
router.delete("/:id", controller.deleteMesa);
router.put("/:id", controller.updateMesa);

module.exports = router;
