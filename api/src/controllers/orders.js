const Orders = require("../models/Orders");
const orderController = {};

orderController.addOrder = async (req, res, next) => {
  try {
    const newOrder = await new Orders(req.body);
    await newOrder.save();
    res.json({
      succes: true,
      msg: "Orden creada",
      payload: newOrder,
    });
  } catch (err) {
    next(err);
  }
};

orderController.findOrders = async (req, res, next) => {
  try {
    const ordersRes = await Orders.find({}, { __v: 0 });
    if (ordersRes.length) {
      res.json({
        succes: true,
        msg: "Ordenes encontradas",
        payload: ordersRes,
      });
    }
  } catch (err) {
    next(err);
  }
};

orderController.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Orders.deleteOne({ _id: `${id}` });
    return res.json({
      succes: true,
      msg: "Ordene Eliminada",
      payload: null,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo eliminar la orden",
      payload: err,
    });
  }
};

orderController.updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const updatedOrder = await Orders.findOneAndUpdate(
      { _id: `${id}` },
      payload,
      {
        new: true,
      }
    );
    return res.json({
      succes: true,
      msg: "Ordene modificada exitosamente",
      payload: updatedOrder,
    });
  } catch (err) {
    res.json({
      succes: false,
      msg: "No se pudo modificar la orden",
      payload: err,
    });
  }
};

module.exports = orderController;
