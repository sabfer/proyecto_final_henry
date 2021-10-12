const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");
const auth = require("../controllers/auth.js");

// router.use(auth.secret);    // todas las rutas autenticadas

router.get("/:email", controller.findUniqueEmail);
router.post("/register", controller.addUser);
router.post("/login", auth.login);

router.get("/filter", auth.secret, controller.filterUser);
router.delete("/:id", auth.secret, controller.deleteUser);
router.put("/:id", auth.secret, controller.updateUser);

module.exports = router;
