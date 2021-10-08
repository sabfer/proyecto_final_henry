const express = require("express");
const router = express.Router();
// const controller = require("../controllers/users");
const auth = require("../controllers/auth.js");

router.get('/', auth.test);
router.get('/secret', auth.secret);
router.get("/secretDebug", auth.secretDebug);
router.post('/login', auth.login);



// router.get("/", function (req, res) {
//     res.json({ message: "Estoy HOME!" });
// });


// router.post("/login", async function (req, res) {
//     if (req.body.email && req.body.password) {
//         var email = req.body.email;
//         var password = req.body.password;
//     }

//     let [user] = await controller.findUniqueUser(email)
//     console.log('--------------user:', user);

//     if (!user) {
//         res.status(401).json({ message: "Usuario no encontrado" });
//     }

//     validPassword = await bcrypt.compare(password, user.password);
//     console.log('pass valido: ', validPassword);

//     if (validPassword) {
//         var payload = { id: user.id };
//         var token = jwt.sign(payload, jwtOptions.secretOrKey);
//         console.log('id:', user.id);
//         res.json({ message: "Logueo correcto, te va el token...", token: token });
//     } else {
//         res.status(401).json({ message: "invalid credentials" });
//     }
// });

// router.get("/secret", (req, res, next) => {
//     passport.authenticate('jwt', { session: false, }, (err, user, info) => {
//         // console.log('---------- err: ', err);
//         // console.log('---------- user: ', user);
//         // console.log('---------- info: ', info);
//         if (err) {
//             console.log('--------------err: ', err);
//             return next(err);
//         }
//         if (user) {
//             // res.redirect('/auth');
//             // next()
//             res.json({ message: 'exito total!!!!' }).status(200);;
//         } else {
//             console.log('------- info: ', typeof info)
//             if (Object.entries(info).length > 0) {
//                 console.log('estoy dentro del IF de info');
//                 res.json(info).status(403);
//             } else {
//                 console.log('estoy dentro del ELSE de info');
//                 // res.status(403);
//                 res.redirect('/auth');
//             }
//         }
//     })(req, res, next);
// })

// router.get("/secretDebug",
//     function (req, res, next) {
//         console.log(req.get('Authorization'));
//         next();
//     }, function (req, res) {
//         res.json("debugging");
//     });

module.exports = router;
