const express = require("express");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcryptjs");
const controller = require("../controllers/users.js");
const Users = require("../models/Users");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const auth = {};

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secretoProyectoX';

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    // console.log('------------------jwt_payload', jwt_payload);
    let users = await Users.find();
    let user = users.find(user => user.id === jwt_payload.id);
    // console.log('--------------users:', user);
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


auth.test = function (req, res) {
    res.json({ message: "Server funcionando!" });
};

auth.login = async function (req, res) {
    console.log('estoy en auth.login');
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
    }

    console.log('---------------req email: ', req.body.email);
    console.log('---------------req password: ', req.body.password);
    let [user] = await Users.find({ email: email });
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
        res.json({ message: "Logueo correcto, te va el token...", token: token, id: user.id });
    } else {
        res.json({ message: "Password inválido.", token: null })
            .status(401);
    }
}

auth.id = async function (req, res) {
    // console.log('----->>>>>>>>> estoy en funcion para entregar id desde token, con req: ', req.userId);
    // res.json({ id: res.userId });
    res.json(req.userId)
}

auth.secret = (req, res, next) => {
    passport.authenticate('jwt', { session: false, }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        // console.log('------- err: ',  err)
        // console.log('------- user: ', user)
        // console.log('------- info: ',  info)
        if (user) {
            console.log(`--------------AUTH CORRECTA. id= ${user._id} & email= ${user.email}`);
            // res.json({ message: 'Token correcto', userId: user._id }).status(200);;
            // res.redirect('/auth');
            // res.json({ message: 'ok' })
            // .status(200);
            req.userId = user._id;
            next();
        } else {
            console.log('----- typeof info: ', typeof info, Object.entries(info).length);
            if (Object.entries(info).length > 0) {
                console.log('No hay token de autenticacion. Deberia loguearse.');
                // res.json(info).status(403);
                res.sendStatus(403)
            } else {
                // console.log('----------info', info);
                console.log('No hay usuario y el token es incorrecto.');
                res.sendStatus(403);
                // res.redirect('/auth');
            }
        }
    })(req, res, next);
}

auth.secretDebug = function (req, res, next) {
    console.log('Authorization: ', req.get('Authorization'));
    res.json({ Authorization: req.get('Authorization') })
    // res.redirect('/');
}, function (req, res) {
    res.json({ debug: 'debugging' });
};


module.exports = auth;