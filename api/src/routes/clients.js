const express = require("express");
const router = express.Router();
const controller = require("../controllers/clients.js");

router.get("/", controller.findClients);
router.get("/filter", controller.filtersClient);
router.post("/register", controller.addClient);
router.delete("/:id", controller.deleteClient);
router.put("/:id", controller.updateClient);

module.exports = router;
