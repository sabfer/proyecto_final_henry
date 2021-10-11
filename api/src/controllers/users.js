const Users = require("../models/Users");
const usersController = {};

// FILTER

usersController.filterUser = async (req, res, next) => {
    const { key, value } = req.query;
    try{
        const list = await Users.find();
        const filters = list.filter((user) => {
            return user[key].includes(value.toLocaleLowerCase())
        });
        if(filters.length){
            res.json({
                succes: true,
                msg: "Coincidencias encontradas",
                payload: filters
            });
        }
    } catch(err) {
        next(err);
    }
};

// GET
usersController.findUsers = async (_req, res, next) => {
  try {
    const users = await Users.find({}, { __v: 0 }).populate("category", {
      _id: 0,
      __v: 0,
    });
    if (users.length) {
      res.json({
        succes: true,
        msg: "Usuarios encontrados",
        payload: users,
      });
    } else {
      res.json({
        succes: false,
        msg: "Usuarios no encontrados",
        payload: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

// POST
usersController.addUser = async (req, res, _next) => {
    const payload  = req.body;
    try{
        const users = await Users.findOne({name : payload.name})
        if(users) {
            res.json({
                succes: false,
                msg: "Este usuario ya existe",
                payload: null
            })
        } else {
            const newUser = await new Users(payload);
            await newUser.save();
            res.json({
                succes:true,
                msg: "Usuario Creado",
                payload: newUser
            })
        }
    } catch (err) {
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
        {new: true,}
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
