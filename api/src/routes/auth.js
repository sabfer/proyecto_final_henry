const express = require("express");
const router = express.Router();
// const controller = require("../controllers/users");
const auth = require("../controllers/auth.js");

router.get('/', auth.test);
router.get('/secret', auth.secret);
router.get("/secretDebug", auth.secretDebug);
router.get("/getId", auth.secret, auth.id);
router.post('/login', auth.login);


module.exports = router;
