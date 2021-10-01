const express = require("express");
const router = express.Router();
const {
  createComerceType,
  searchTypeComerceByName,
  searchTypeComerce,
  updateComerceType,
  deleteTypeComerce,
} = require("../controllers/comerceType");

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newComerceType = await createComerceType(name);
    res.json({
      succes: true,
      msg: "El tipo de comercio fue creado",
      payload: newComerceType,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear el tipo de comercio",
      payload: null,
    });
  }
});

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const comerceTypeByName = await searchTypeComerceByName(name);
      comerceTypeByName
        ? res.json({
            succes: true,
            msg: "Tipo de comercio encontrado",
            payload: comerceTypeByName,
          })
        : res.json({
            succes: false,
            msg: "No se encontro un tipo de comercio con ese nombre",
            payload: null,
          });
    } else {
      const listTypes = await searchTypeComerce();
      listTypes
        ? res.json({
            succes: true,
            msg: "Tipos de comerio encontrados",
            payload: listTypes,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron tipos de comercio",
            payload: null,
          });
    }
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedType = await updateComerceType(id, name);
    updatedType
      ? res.json({
          succes: true,
          msg: "Tipo de comercio modificado",
          payload: updatedType,
        })
      : res.json({
          succes: false,
          msg: "No se pudo modificar",
          payload: null,
        });
  } catch (err) {
    res.json({ succes: false, msg: "Error", payload: null });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteType = await deleteTypeComerce(id);
    deleteType
      ? res.json({
          succes: true,
          msg: "Tipo de comercio Eliminado",
          payload: null,
        })
      : res.json({
          succes: false,
          msg: "No se pudo eliminar",
          payload: null,
        });
  } catch (err) {
    res.json({ succes: false, msg: "error", payload: null });
  }
});

module.exports = router;
