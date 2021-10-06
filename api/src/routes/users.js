const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

router.get("/", controller.findUsers);
router.get("/filter", controller.filterUser);
router.post("/register", controller.addUser);
router.delete("/:id", controller.deleteUser);
router.put("/:id", controller.updateUser);

module.exports = router;
