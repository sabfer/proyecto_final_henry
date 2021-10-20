const ProductsInv = require("../models/ProductsInv");
const productInvController = {};

//crear productInv
productInvController.addProductInv = async (req, res, next) => {
  const { name, cant, price, prodInvType, proveeType, fecha } = req.body;
  if (name && cant && price && prodInvType && proveeType && fecha) {
    try {
      const newProdInv = await new ProductsInv({
        name,
        cant,
        price,
        prodInvType,
        proveeType,
        fecha,
      });
      await newProdInv.save();
      return res.json({
        succes: true,
        msg: "ProdInv creado",
        payload: newProdInv,
      });
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
      msg: "Faltan inputs requeridos",
      payload: null,
    });
  }
};

//Get productsInv
productInvController.getProductsInv = async (req, res, next) => {
  try {
    const prodsInv = await ProductsInv.find({}, { __v: 0 }).sort({ name: 1 });
    if (prodsInv.length) {
      return res.json({
        succes: true,
        msg: "Productos hallados",
        payload: prodsInv,
      });
    }
    return res.json({
      succes: false,
      msg: "No se encontraron productos",
      payload: null,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se encontraron productos",
      payload: err,
    });
  }
};

//DeleteProductInv
productInvController.deleteProductInv = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    try {
      await ProductsInv.deleteOne({ _id: `${id}` });
      return res.json({
        succes: true,
        msg: "Producto Eliminado",
        payload: null,
      });
    } catch (err) {
      return res.json({
        succes: false,
        msg: "Error al eliminar el producto",
        payload: err,
      });
    }
  } else {
    res.json({
      succes: false,
      msg: "Se requiere id del producto",
      payload: null,
    });
  }
};

productInvController.updateProductInv = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  if (id && payload) {
    try {
      const updatedProdInv = await ProductsInv.findOneAndUpdate(
        { _id: `${id}` },
        payload,
        {
          new: true,
        }
      );
      return res.json({
        succes: true,
        msg: "Ordene modificada exitosamente",
        payload: updatedProdInv,
      });
    } catch (err) {
      res.json({
        succes: false,
        msg: "Error al modificar el producto",
        payload: err,
      });
    }
  } else {
    res.json({
      succes: false,
      msg: "Se requiere id y props",
      payload: null,
    });
  }
};

module.exports = productInvController;
