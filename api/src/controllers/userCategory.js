const UserCategory = require("../models/UserCategory");
const userCategoryController = {};

// GET
userCategoryController.findCategorys = async (_req, res, next) => {
  try {
    const categories = await UserCategory.find();
    if (categories.length) {
      res.json({
        succes: true,
        msg: "Categorias encontradas",
        payload: categories,
      });
    } else {
      res.json({
        succes: false,
        msg: "Categorias no encontrados",
        payload: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

// POST
userCategoryController.addCategory = async (req, res, _next) => {
  const payload = req.body;
  try {
    const category = await UserCategory.findOne({ name: payload.name });
    if (category) {
      res.json({
        succes: false,
        msg: "Ya existe la cateogria",
        payload: null,
      });
    } else {
      const newCategory = await new UserCategory(payload);
      await newCategory.save();
      res.json({
        succes: true,
        msg: "Categoria creada exitosamente!",
        payload: newCategory,
      });
    }
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear la categoria",
      payload: err,
    });
  }
};

module.exports = userCategoryController;
