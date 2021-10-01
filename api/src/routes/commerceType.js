const express = require("express");
const router = express.Router();
const {
  createCommerceType,
  searchTypeCommerceByName,
  searchTypeCommerce,
  updateCommerceType,
  deleteTypeCommerce,
} = require("../controllers/commerceType");

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newCommerceType = await createCommerceType(name);
    res.json({
      succes: true,
      msg: "El tipo de comercio fue creado",
      payload: newCommerceType,
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
      const commerceTypeByName = await searchTypeCommerceByName(name);
      commerceTypeByName
        ? res.json({
            succes: true,
            msg: "Tipo de comercio encontrado",
            payload: commerceTypeByName,
          })
        : res.json({
            succes: false,
            msg: "No se encontro un tipo de comercio con ese nombre",
            payload: null,
          });
    } else {
      const listTypes = await searchTypeCommerce();
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
    const updatedType = await updateCommerceType(id, name);
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
    const deleteType = await deleteTypeCommerce(id);
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
