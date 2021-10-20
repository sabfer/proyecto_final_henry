const ProductsType = require("../models/ProductsType");
const productsTypeController = {};

//GET
productsTypeController.findProductsType = async (req, res, next) => {
  const { userId } = req.query;
  if (userId) {
    try {
      const types = await ProductsType.find({ userId }).sort({ name: 1 });
      if (types.length) {
        res.json({
          succes: true,
          msg: "Categoría encontradas",
          payload: types,
        });
      } else {
        res.json({
          succes: false,
          msg: "Categorías no encontradas",
          payload: null,
        });
      }
    } catch (err) {
      res.json({
        succes: false,
        msg: "Error",
        payload: err,
      });
    }
  } else {
    res.json({
      succes: false,
      msg: "Se requiere userId",
      payload: null,
    });
  }
};

// POSTS
productsTypeController.addProductType = async (req, res, _next) => {
  const payload = req.body;
  try {
    const type = await ProductsType.findOne({
      name: payload.name,
      userId: `${payload.userId}`,
    });
    if (type) {
      res.json({
        succes: false,
        msg: "Este tipo de producto ya existe",
        payload: null,
      });
    } else {
      const newProductType = await new ProductsType(payload);
      await newProductType.save();
      res.json({
        succes: true,
        msg: "Tipo de producto creado exitosamente!",
        payload: newProductType,
      });
    }
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear el tipo de producto",
      payload: err,
    });
  }
};

// DELETE
productsTypeController.deleteProductType = async (req, res, _next) => {
  const { id } = req.params;
  if (id) {
    try {
      await ProductsType.deleteOne({ _id: `${id}` });
      return res.json({
        succes: true,
        msg: "Tipo de producto eliminado exitosamente!",
        payload: null,
      });
    } catch (err) {
      res.json({
        succes: false,
        msg: "No se pudo eliminar el tipo de producto",
        payload: err,
      });
    }
  } else {
    res.json({
      succes: false,
      msg: "Se requiere id",
      payload: null,
    });
  }
};

module.exports = productsTypeController;
