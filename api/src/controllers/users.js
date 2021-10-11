const Users = require("../models/Users");
const usersController = {};

// FILTER

usersController.filterByEmail = async (email) => {
  const list = await Users.find();
  const filterByEmail = list.filter((user) => {
    return user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase());
  });
  return filterByEmail.length ? filterByEmail : null;
}

usersController.filterUser = async (req, res, next) => {
  const { key, value } = req.body;
  try {
    const list = await Users.find();
    const filters = list.filter((user) => {
      return user[key].includes(value.toLocaleLowerCase())
    });
    if (filters.length) {
      res.json({
        succes: true,
        msg: "Coincidencias encontradas",
        payload: filters
      });
    }
  } catch (err) {
    next(err);
  }
};

// GET

usersController.findUniqueEmail = async (req, res, next) => {
  // console.log('---- controller findUniqueEmail');
  console.log('---- req.params.email: ', req.params.email);
  const results = await Users.find({ email: req.params.email });
  // console.log('---------- results: ', results);
  res.send(results.length ? true : false);
  // res.json({ results }).status(200);
};

usersController.findUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    // console.log('----------------------------- req,res,next', req, res, next);
    if (users.length) {
      res.json({
        succes: true,
        msg: "Usuarios encontrados",
        payload: users
      })
    } else {
      res.json({
        succes: false,
        msg: "Usuarios no encontrados",
        payload: null
      })
    }
  } catch (err) {
    console.log(err);
  }
};

// POST
usersController.addUser = async (req, res, _next) => {
  // console.log('----controller addUser');
  const payload = req.body;
  // console.log('en addUser con payload: ', payload);
  // console.log('en addUser con payload.email: ', payload.email);
  try {
    // console.log('entre al try de addUser');
    const users = await Users.find({ email: payload.email })
    // console.log('------- users: ', users);
    if (users.length) {
      res.json({
        succes: false,
        msg: "Este usuario ya existe",
        payload: null
      })
    } else {
      // console.log('ingreso al ELSE para tirar el newUser, con payload: ', payload);
      const newUser = await new Users(payload);
      await newUser.save();
      console.log('grabé correctamente el newUser.');
      res.json({
        succes: true,
        msg: "Usuario Creado",
        payload: newUser
      })
    }
  } catch (err) {
    // console.log('estoy en el catch de addUser con err: ', err);
    res.json({
      succes: false,
      msg: "No se pudo crear el usuario",
      payload: err
    });
  }
};

// DELETE
usersController.deleteUser = async (req, res, _next) => {
  const { id } = req.params;
  try {
    await Users.deleteOne({ _id: `${id}` });
    return res.json({
      succes: true,
      msg: "Usuario eliminado exitosamente",
      payload: null,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo eliminar el usuario",
      payload: err,
    });
  }
};

// UPDATE
usersController.updateUser = async (req, res, _next) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: `${id}` },
      payload,
      { new: true, }
    );
    return res.json({
      succes: true,
      msg: "Usuario modificado exitosamente",
      payload: updatedUser,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo modificar el usuario",
      payload: err,
    });
  }
};

module.exports = usersController;
