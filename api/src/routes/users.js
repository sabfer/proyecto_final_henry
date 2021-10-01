const express = require("express");
const router = express.Router();
const {
  filterByEmail,
  findUsers,
  createUser,
  deleteUserById,
  updateById,
} = require("../controllers/users");

const { verifyInputsToUpdate } = require("../controllers/functions");

router.get("/", async function (req, res) {
  const { userEmail } = req.query;
  try {
    if (userEmail) {
      const usersfilterByEmail = await filterByEmail(userEmail);
      usersfilterByEmail
        ? res.json({
            succes: true,
            msg: "Usuario encontrado",
            payload: usersfilterByEmail,
          })
        : res.json({
            succes: false,
            msg: "No se encontro un usuario con ese email",
            payload: null,
          });
    } else {
      const listUsers = await findUsers();
      listUsers
        ? res.json({
            succes: true,
            msg: "Usuarios encontrados",
            payload: listUsers,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron usuarios",
            payload: null,
          });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/register", async function (req, res) {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const users = await findUsers();
      const checkUserExist = await filterByEmail(users, email);
      if (checkUserExist) {
        return res.json({
          succes: false,
          msg: "El usuario ya existe, ingrese otro email",
          payload: null,
        });
      }
      const newUser = await createUser(password, email);
      if (newUser) {
        return res.json({
          succes: true,
          msg: "Usuario creado exitosamente",
          payload: newUser,
        });
      }
    } catch (err) {
      res.json({
        succes: false,
        msg: "No se pudo crear el usuario",
        payload: null,
      });
    }
  }
  res.json({
    succes: false,
    msg: "Campos requeridos incompletos",
    payload: null,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await deleteUserById(id);
    userDelete
      ? res.json({
          succes: true,
          msg: "Usuario eliminado exitosamente",
          payload: null,
        })
      : res.json({ succes: false, msg: "Cannot delete user", payload: null });
  } catch (err) {
    res.status(404);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body;
  if (verifyInputsToUpdate(fieldsToUpdate, ["email", "password"])) {
    try {
      const userUpdated = await updateById(id, fieldsToUpdate);
      if (userUpdated) {
        return res.json({
          succes: true,
          msg: "Usuario modificado exitosamente",
          payload: userUpdated,
        });
      }
    } catch (err) {
      return res.json({
        succes: false,
        msg: "No se pudo modificar el usuario",
        payload: null,
      });
    }
  }
  res.json({
    succes: false,
    msg: "Los campos a modificar no son validos",
    payload: null,
  });
});

module.exports = router;
