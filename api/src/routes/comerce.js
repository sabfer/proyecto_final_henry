const express = require("express");
const router = express.Router();
const {
  searchComerces,
  findByName,
  createComerce,
} = require("../controllers/comerce");

router.get("/", async function (req, res) {
  const { name } = req.query;
  try {
    if (name) {
      const comercesfilterByEmail = await findByName(name);
      comercesfilterByEmail
        ? res.json({
            succes: true,
            msg: "Comercio encontrado",
            payload: comercesfilterByEmail,
          })
        : res.json({
            succes: false,
            msg: "No se encontro un comercio con ese nombre",
            payload: null,
          });
    } else {
      const listComerces = await searchComerces();
      listComerces
        ? res.json({
            succes: true,
            msg: "Comercios encontrados",
            payload: listComerces,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron comercios",
            payload: null,
          });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async function (req, res) {
  const payload = req.body;
  console.log(payload);

  try {
    const comerceExistent = await findByName(payload.name);
    if (comerceExistent) {
      return res.json({
        succes: false,
        msg: "El comercio ya existe",
        payload: null,
      });
    }
    const newComerce = await createUser(payload);
    if (newComerce) {
      return res.json({
        succes: true,
        msg: "Comercio creado exitosamente",
        payload: newComerce,
      });
    }
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear el comercio",
      payload: null,
    });
  }
});

module.exports = router;
