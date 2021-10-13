const Mesas = require("../models/Mesas");
const mesasController = {};

// GET
mesasController.findMesaByNum = async (req, res, next) => {
  const { numero } = req.query;
  try {
    const mesa = await Mesas.findByIdAndRemove({ numero: numero });
    if (mesa) {
      res.json({
        succes: true,
        msg: "Mesa encontrada",
        payload: mesa,
      });
    } else {
      res.json({
        succes: false,
        msg: "Mesa no encontrada",
        payload: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

mesasController.findMesas = async (_req, res, next) => {
  try {
    const mesas = await Mesas.find();
    if (mesas.length) {
      res.json({
        succes: true,
        msg: "Mesas encontradas",
        payload: mesas,
      });
    } else {
      res.json({
        succes: false,
        msg: "Mesas no encontrados",
        payload: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

// POST
mesasController.addMesa = async (req, res, _next) => {
  const payload = req.body;
  try {
    const mesas = await Mesas.findOne({ numero: payload.numero });
    if (mesas) {
      res.json({
        succes: false,
        msg: "Esta mesa ya existe",
        payload: null,
      });
    } else {
      const newMesa = await new Mesas(payload);
      await newMesa.save();
      res.json({
        succes: true,
        msg: "Mesa Creada exitosamente!",
        payload: newMesa,
      });
    }
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo crear la mesa",
      payload: err,
    });
  }
};

// DELETE
mesasController.deleteMesa = async (req, res, _next) => {
  const { id } = req.params;
  try {
    await Mesas.deleteOne({ _id: `${id}` });
    return res.json({
      succes: true,
      msg: "Mesa eliminada exitosamente!",
      payload: null,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo eliminar la mesa",
      payload: err,
    });
  }
};

// UPDATE
mesasController.updateMesa = async (req, res, _next) => {
  const { tableNumber } = req.params;
  const payload = req.body;
  try {
    const updatedMesa = await Mesas.findOneAndUpdate(
      { tableNumber: `${tableNumber}` },
      payload,
      { new: true }
    );
    return res.json({
      succes: true,
      msg: "Mesa modificada exitosamente",
      payload: updatedMesa,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo modificar la mesa",
      payload: err,
    });
  }
};

module.exports = mesasController;
