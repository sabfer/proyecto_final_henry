const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

// router.post("/", async (req, res) => {
//   const { userEmail, userPassword } = req.body;
//   try {
//     const usuario = await Users.findOne({ email: userEmail });

//     console.log(
//       "holaaaa:",
//       await bcrypt.compare(userPassword, usuario.password)
//     );
//     res.json(usuario);
//   } catch (err) {
//     res.send(err);
//   }
// });

// module.exports = router;
