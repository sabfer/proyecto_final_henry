const Orders = require("../models/Orders");
const orderController = {};

orderController.addOrder = async (req, res, next) => {
  try {
    let orders = await Orders.find();
    let ordersN = orders.length;
    const newOrder = await new Orders({
      ...req.body,
      orderNumber: ordersN + 1,
    });
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
  const { type } = req.query;
  try {
    const orders = await Orders.find({}, { __v: 0 });
    if (type) {
      ordersByType = orders.filter((order) => {
        return order.type
          .toLocaleLowerCase()
          .includes(type.toLocaleLowerCase());
      });
    }
    if (orders.length) {
      return res.json({
        succes: true,
        msg: "Ordenes encontradas",
        payload: orders,
      });
    }
    res.json({
      succes: false,
      msg: "No se encontraron ordenes",
      payload: null,
    });
  } catch (err) {
    next(err);
  }
};

orderController.findActiveOrders = async (req, res, next) => {
  const { type } = req.query;
  try {
    const orders = await Orders.find({}, { __v: 0 });
    ordersActives = orders.filter((order) => order.estado !== "Finalizada");
    if (type) {
      ordersByType = ordersActives.filter((order) => {
        return order.type
          .toLocaleLowerCase()
          .includes(type.toLocaleLowerCase());
      });
      ordersByType.length
        ? res.json({
            succes: true,
            msg: "Ordenes encontradas",
            payload: ordersByType,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron ordenes",
            payload: null,
          });
    } else {
      if (ordersActives.length) {
        return res.json({
          succes: true,
          msg: "Ordenes encontradas",
          payload: ordersActives,
        });
      }
      res.json({
        succes: false,
        msg: "No se encontraron ordenes",
        payload: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

//Filter Dinamico (por cualquier prop)
orderController.filterOrders = async (req, res, next) => {
  const { key, value } = req.query;
  try {
    const orders = await Orders.find({}, { __v: 0 });
    if (orders.length) {
      const filterOrders = orders.filter((order) => {
        if (typeof value === Number) return order[key] === value;
        return order[key]
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      filterOrders.length
        ? res.json({
            succes: true,
            msg: "Ordenes encontradas",
            payload: filterOrders,
          })
        : res.json({
            succes: false,
            msg: "No se encontraron ordenes",
            payload: null,
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
