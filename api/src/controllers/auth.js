const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcryptjs");
const controller = require("../controllers/users.js");
const Users = require("../models/Users");
const Mesas = require("../models/Mesas.js");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const auth = {};

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "secretoProyectoX";

let expirationTime = "24h";

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  // console.log('------------------jwt_payload', jwt_payload);
  let users = await Users.find();
  let user = users.find((user) => user.id === jwt_payload.id);
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
  console.log("estoy en auth.login");
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
  }
  // console.log('---------------req email, psw: ', req.body.email, req.body.password);
  let [user] = await Users.find({ email: email });
  // console.log('--------------user:', user);

  if (!user) {
    res.status(401).json({ message: "Usuario no encontrado" });
  }

  validPassword = await bcrypt.compare(password, user.password);
  console.log("pass valido: ", validPassword);

  if (validPassword) {
    var payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey, {
      expiresIn: expirationTime,
    });
    console.log("--------------------id:", user.id, "name: ", user.name);
    res.json({
      message: "Logueo correcto, te va el token...",
      token: token,
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.json({ message: "Password inválido.", token: null }).status(401);
  }
};

auth.id = async function (req, res) {
  let users = await Users.find({ _id: req.userId });
  //let mesas = await Mesas.find({ userId: req.userId })

  console.log("----> users: ", users);
  //console.log('----> mesas: ', mesas);

  res.json({
    id: req.userId,
    email: req.userEmail,
    name: req.userName ?? "",
    // tables: mesas ?? null,
    expSession: req.expirationTime ?? "24h",
  });
};

auth.updateId = async function (req, res) {
  // console.log('console de updateId')
  // console.log('req.body: ', req.body)
  let name = req.body.name;
  let expirationTime = req.body.expirationTime;
  let userId = req.body.id;

  let user = await Users.find({ _id: userId });

  console.log('userId: ', user)
  console.log('name: ', name)
  console.log('expirationTime: ', expirationTime)
  try {
    const updateUserData = await Users.findOneAndUpdate(
      { _id: `${userId}` },
      { name, expirationTime },
      { new: true }
    );
    console.log("-----------updateUserData: ", updateUserData);
    return res.json({
      success: true,
      message: "Settings modified successfully.",
      data: { name, expirationTime },
    });
  } catch (err) {
    res.json({
      success: false,
      msg: "Settigns couldn't be modified.",
      payload: err,
    });
  }

  res.json({
    message: "vengo del back en updateId",
    name,
    expirationTime,
  });
};

auth.secret = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (user) {
      console.log('--------------req.body: ', req.body)
      console.log('--------------req.headers: ', req.headers)
      console.log(`--------------AUTH CORRECTA. id= ${user._id} & email= ${user.email},
            & user= ${user.expirationTime} `);
      // res.json({ message: 'Token correcto', userId: user._id }).status(200);;
      req.userId = user._id;
      req.userEmail = user.email;
      req.userName = user.name;
      req.expirationTime = user.expirationTime;
      // req.user.id = user._id;
      // req.user.id = user._id;
      next();
    } else {
      // console.log(
      //   "----- typeof info: ",
      //   typeof info,
      //   Object.entries(info).length
      // );
      if (Object.entries(info).length > 0) {
        let today = new Date();
        console.log('--------hora: ', today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        console.log("No hay token de autenticacion. Deberia loguearse.");
        // res.json(info).status(403);
        res.sendStatus(403);
      } else {
        // console.log('----------info', info);
        console.log("No hay usuario y el token es incorrecto.");
        res.sendStatus(403);
        // res.redirect('/auth');
      }
    }
  })(req, res, next);
};

(auth.secretDebug = function (req, res, next) {
  console.log("Authorization: ", req.get("Authorization"));
  res.json({ Authorization: req.get("Authorization") });
  // res.redirect('/');
}),
  function (req, res) {
    res.json({ debug: "debugging" });
  };

module.exports = auth;
