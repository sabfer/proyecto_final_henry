const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

const passport = require("passport");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const controller = require("../controllers/users");


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secretoProyectoX';

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    // usually this would be a database call:

    console.log('jwt_payload', jwt_payload);
    let users = await controller.findUsers()

    let user = users.find(user => user.id === jwt_payload.id);

    console.log('--------------users:', user);

    // var user = users[_.findIndex(users, { id: jwt_payload.id })];
    if (user) {
        return next(null, user);
    } else {
        return next(null, false);
    }
});

passport.use(strategy);

var app = express();
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));


router.get("/", function (req, res) {
    res.json({ message: "Estoy HOME!" });
});


router.post("/login", async function (req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
    }

    let [user] = await controller.findUniqueUser(email)
    console.log('--------------user:', user);

    if (!user) {
        res.status(401).json({ message: "Usuario no encontrado" });
    }

    validPassword = await bcrypt.compare(password, user.password);
    console.log('pass valido: ', validPassword);

    if (validPassword) {
        var payload = { id: user.id };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        console.log('id:', user.id);
        res.json({ message: "Logueo correcto, te va el token...", token: token });
    } else {
        res.status(401).json({ message: "invalid credentials" });
    }
});

router.get("/secret", (req, res, next) => {
    passport.authenticate('jwt', { session: false, }, (err, user, info) => {
        // console.log('---------- err: ', err);
        // console.log('---------- user: ', user);
        // console.log('---------- info: ', info);
        if (err) {
            console.log('--------------err: ', err);
            return next(err);
        }
        if (user) {
            // res.redirect('/auth');
            // next()
            res.json({ message: 'exito total!!!!' }).status(200);;
        } else {
            console.log('------- info: ', typeof info)
            if (Object.entries(info).length > 0) {
                console.log('estoy dentro del IF de info');
                res.json(info).status(403);
            } else {
                console.log('estoy dentro del ELSE de info');
                // res.status(403);
                res.redirect('/auth');
            }
        }
    })(req, res, next);
})

router.get("/secretDebug",
    function (req, res, next) {
        console.log(req.get('Authorization'));
        next();
    }, function (req, res) {
        res.json("debugging");
    });

module.exports = router;
