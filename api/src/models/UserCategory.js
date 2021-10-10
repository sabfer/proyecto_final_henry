const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const values = [
  "Clients",
  "Commerce",
  "ComerceType",
  "Mesas",
  "Orders",
  "Products",
  "ProductsTypes",
  "UserCategory",
  "Users",
];

const UserCategorySchema = new Schema({
  name: { type: String, required: true },
  leer: [{ type: String, enum: values }],
  crear: [{ type: String, enum: values }],
  modificar: [{ type: String, enum: values }],
  eliminar: [{ type: String, enum: values }],
});

module.exports = mongoose.model("UserCategory", UserCategorySchema);
