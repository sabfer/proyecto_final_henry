const Orders = require("../models/Orders");
const orderController = {};

orderController.addOrder = async (req, res, next) => {
  try {
    let orders = await Orders.find({ userId: `${req.body.userId}` });
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
    res.json({
      succes: false,
      msg: "Error al crear la orden",
      payload: newOrder,
    });
  }
};

orderController.findOrders = async (req, res, next) => {
  const { type, userId } = req.query;
  if (userId) {
    try {
      const orders = await Orders.find({ userId }, { __v: 0 });
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
      res.json({
        succes: false,
        msg: "No se encontraron ordenes",
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

orderController.findActiveOrders = async (req, res, next) => {
  const { type, userId } = req.query;
  if (userId) {
    try {
      const orders = await Orders.find({ userId }, { __v: 0 });
      ordersActives = orders.filter((order) => order.estado !== 4);
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
      res.json({
        succes: false,
        msg: "No se encontraron ordenes",
        payload: null,
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

//Filter Dinamico (por cualquier prop)
orderController.filterOrders = async (req, res, next) => {
  const { key, value, userId } = req.query;
  if (userId) {
    try {
      const orders = await Orders.find({ userId }, { __v: 0 });
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

orderController.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
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
  } else {
    res.json({
      succes: false,
      msg: "Se requiere id",
      payload: null,
    });
  }
};

orderController.updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  if (id && payload) {
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
  } else {
    res.json({
      succes: false,
      msg: "Se requiere id y payload",
      payload: null,
    });
  }
};

module.exports = orderController;
