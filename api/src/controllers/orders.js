const Orders = require("../models/Orders");
const orderController = {};

orderController.add = async (req, res, next) => {
  try {
    console.log(res);
    const newOrder = await new Orders({ ...req.body, date: new Date() });
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
    const ordersRes = await Orders.find({}).populate({
      path: "products",
      populate: { path: "product", select: { name: 1, price: 1, _id: 0 } },
    });
    if (ordersRes.length) {
      res.json({
        succes: true,
        msg: "Ordenes encontradas",
        payload: ordersRes,
      });
    }
  } catch (err) {
    res.send(err);
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
// const searchTypeCommerce = async () => {
//   const results = await CommerceType.find();
//   return results.length ? results : null;
// };

// const searchTypeCommerceByName = async (name) => {
//   const list = await searchTypeCommerce();
//   const filterByName = list.filter((type) => {
//     return type.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
//   });
//   return filterByName.length ? filterByName : null;
// };

// const updateCommerceType = async (id, name) => {
//   const commerceType = await CommerceType.findOneAndUpdate(
//     { _id: `${id}` },
//     { name },
//     { new: true }
//   );
//   return commerceType ? commerceType : false;
// };

// const deleteTypeCommerce = async (id) => {
//   const typeDelete = await CommerceType.deleteOne({ _id: `${id}` });
//   return typeDelete.deletedCount === 1 ? true : false;
// };

module.exports = orderController;
