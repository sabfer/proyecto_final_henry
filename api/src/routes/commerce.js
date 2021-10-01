const express = require("express");
const router = express.Router();
const {
  searchCommerces,
  findByName,
  filterByName,
  createCommerce,
  deleteCommerceById,
  updateById,
} = require("../controllers/commerce");

router.get("/", async function (req, res) {
  const { name } = req.query;
  try {
    if (name) {
      const commercesfilterByName = await filterByName(name);
      commercesfilterByName
        ? res.json({
            succes: true,
            msg: "Comercio encontrado",
            payload: commercesfilterByName,
          })
        : res.json({
            succes: false,
            msg: "No se encontro un comercio con ese nombre",
            payload: null,
          });
    } else {
      const listCommerces = await searchCommerces();
      listCommerces
        ? res.json({
            succes: true,
            msg: "Comercios encontrados",
            payload: listCommerces,
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
    const commerceExistent = await findByName(payload.name);
    console.log("HOLAAAAAA");
    if (commerceExistent) {
      return res.json({
        succes: false,
        msg: "El comercio ya existe",
        payload: null,
      });
    }
    const newCommerce = await createCommerce(payload);
    if (newCommerce) {
      return res.json({
        succes: true,
        msg: "Comercio creado exitosamente",
        payload: newCommerce,
      });
    }
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear el comercio",
      payload: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const commerceDelete = await deleteCommerceById(id);
    commerceDelete
      ? res.json({
          succes: true,
          msg: "Comercio eliminado exitosamente",
          payload: null,
        })
      : res.json({
          succes: false,
          msg: "No se pudo eliminar el comerico",
          payload: null,
        });
  } catch (err) {
    res.status(404);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body;
  try {
    const commerceUpdated = await updateById(id, fieldsToUpdate);
    if (commerceUpdated) {
      return res.json({
        succes: true,
        msg: "Comercio modificado exitosamente",
        payload: commerceUpdated,
      });
    }
  } catch (err) {
    return res.json({
      succes: false,
      msg: "No se pudo modificar el comercio",
      payload: null,
    });
  }
});

module.exports = router;
