const express = require("express");
const router = express.Router();
const {
  searchProduct,
  searchProducts,
  filterProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.js");

const auth = require("../controllers/auth.js");
router.use(auth.secret); // todas las rutas autenticadas

router.get("/", async function (req, res) {
  const { name } = req.query;

  try {
    if (name) {
      const product = await searchProduct(name);
      product
        ? res.json({
            succes: true,
            msg: "Producto encontrado",
            payload: product,
          })
        : res.json({
            succes: false,
            msg: "No se encontro el producto",
            payload: null,
          });
    } else {
      const listProducts = await searchProducts();
      listProducts
        ? res.json({
            succes: true,
            msg: "Productos encontrados",
            payload: listProducts,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron productos",
            payload: null,
          });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/add", async function (req, res) {
  const payload = req.body;
  console.log("entro al add");
  if (payload) {
    try {
      const product = await filterProduct(payload.name);
      if (product) {
        return res.json({
          succes: false,
          msg: "El producto ya existe",
          payload: null,
        });
      } else {
        const newProduct = await addProduct(payload);
        return res.json({
          succes: true,
          msg: "Producto creado exitosamente",
          payload: newProduct,
        });
      }
    } catch (err) {
      res.json({
        succes: false,
        msg: "No se pudo crear el producto",
        payload: null,
      });
    }
  } else {
    res.json({
      succes: false,
      msg: "Campos requeridos incompletos",
      payload: null,
    });
  }
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const eliminated = await deleteProduct(id);
    eliminated
      ? res.json({
          success: true,
          msg: "Producto eliminado exitosamente",
          payload: null,
        })
      : res.json({
          succes: false,
          msg: "No se pudo eliminar el producto",
          payload: null,
        });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, msg: "Product not exists" });
  }
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const productsUpdate = req.body;

  try {
    const update = await updateProduct(id, productsUpdate);
    if (update) {
      return res.json({
        success: true,
        msg: "Producto modificado exitosamente",
        payload: update,
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      msg: "No se pudo modificar el producto",
      payload: null,
    });
  }
});

module.exports = router;
