const _ = require("lodash");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const passport = require("passport");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const {
    filterByEmail,
    findUsers,
    createUser,
    deleteUserById,
    updateById,
    findUniqueUser,
} = require("../controllers/users");

var users = [
    {
        id: 1,
        email: 'mrptato@gmail.com',
        password: 'tato123456'
    }
];

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secretoProyectoX';

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    // usually this would be a database call:

    let user = await findUniqueUser(email)

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
    // usually this would be a database call:
    // let user = users.find(usuario => usuario.email === email)
    let [user] = await findUniqueUser(email)
    console.log('--------------user:', user);
    // var user = users[_.findIndex(users, { email: email })];

    if (!user) {
        res.status(401).json({ message: "no such user found" });
    }

    validPassword = await bcrypt.compare(password, user.password);

    console.log('pass valido: ', validPassword);

    if (validPassword) {
        var payload = { id: user.id };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        console.log('id:', user.id);
        res.json({ message: "ok", token: token });
    } else {
        res.status(401).json({ message: "invalid credentials" });
    }


    // if (user.password === password) {
    //     var payload = { id: user.id };
    //     var token = jwt.sign(payload, jwtOptions.secretOrKey);
    //     console.log('id:', user.id);
    //     res.json({ message: "ok", token: token });
    // } else {
    //     res.status(401).json({ message: "invalid credentials" });
    // }
});

router.get("/secret", (req, res, next) => {
    passport.authenticate('jwt', { session: false, }, (err, user, info) => {
        console.log('---------- err: ', err);
        console.log('---------- user: ', user);
        console.log('---------- info: ', info);
        if (err) {
            console.log('--------------err: ', err);
            return next(err);
        }
        if (user) {
            res.json({ message: 'exito total!!!!' }).status(200);;
        } else {
            res.redirect('/auth');
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
