const ProductsType = require("../models/ProductsType");
const productsTypeController = {};

// GETS
/* productsTypeController.findProductType = async (req, res, next) => {
    const { name } = req.params;
    try {
        const type = await ProductsType.findByIdAndRemove({name : name})
    if(type) {
        res.json({
            succes: true,
            msg: "Tipo de mesa encontrada",
            payload: type
        })
    } else {
        res.json({
            succes: false,
            msg: "Tipo de mesa no encontrada",
            payload: null
        })
    }
    } catch (err) {
        next(err);
    }
} */

productsTypeController.findProductsType = async (req, res, next) => {
  try {
    const types = await ProductsType.find();
    if (types.length) {
      res.json({
        succes: true,
        msg: "Categoría de productos creadas",
        payload: types,
      });
    } else {
      res.json({
        succes: false,
        msg: "Categoría de productos no creadas",
        payload: { categories: null },
      });
    }
  } catch (err) {
    next(err);
  }
};

// POSTS
productsTypeController.addProductType = async (req, res, _next) => {
  const payload = req.body;
  try {
    const type = await ProductsType.findOne({ name: payload.name });
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
};

/* // UPDATE/PUT
productsTypeController.updateProductType = async (req, res, _next) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedProductType = await ProductsType.findOneAndUpdate(
      { _id: `${id}` },
      payload,
      { new: true }
    );
    return res.json({
      succes: true,
      msg: "Tipo de producto modificado exitosamente!",
      payload: updatedProductType,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo modificar el tipo de producto",
      payload: err,
    });
  }
}; */

module.exports = productsTypeController;
