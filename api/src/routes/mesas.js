const express = require("express");
const router = express.Router();
const controller = require("../controllers/mesas.js");

const auth = require("../controllers/auth.js");
router.use(auth.secret); // todas las rutas autenticadas

router.get("/", controller.findMesas);
router.get("/:numero", controller.findMesaByNum);
router.post("/add", controller.addMesa);
router.delete("/:id", controller.deleteMesa);
router.put("/:tableNumber", controller.updateMesa);

module.exports = router;
