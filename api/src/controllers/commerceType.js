const CommerceType = require("../models/CommerceType");
const commerceTypeController = {};

// FILTER BY NAME
commerceTypeController.filtersCommerceType = async (req, res, next) => {
  const { name } = req.body;
  try{
      const list = await CommerceType.find();
      const filters = list.filter((type) => {
          return type.includes(name.toLocaleLowerCase())
      });
      if(filters.length){
          res.json({
              succes: true,
              msg: "Coincidencias encontradas",
              payload: filters
          });
      }
  } catch(err) {
      next(err);
  }
};

// GET
commerceTypeController.findCommerceType = async (_req, res, next) => {
  try{
      const commerceType = await CommerceType.find();
      if (commerceType.length) {
          res.json({
              succes: true,
              msg: "Tipos de comercios encontrados",
              payload: commerceType
          })
      } else {
          res.json({
              succes: false,
              msg: "No hay tipos de comercios encontrados",
              payload: null
          })
      }
  } catch (err) {
      next(err);
  }
};

//POST
commerceTypeController.addCommerceType = async (req, res, _next) => {
  const payload  = req.body;
  try{
      const commerceType = await CommerceType.findOne({name : payload.name})
      if(commerceType) {
          res.json({
              succes: false,
              msg: "Este tipo de comercio ya existe",
              payload: null
          })
      } else {
          const newCommerceType = await new CommerceType(payload);
          await newCommerceType.save();
          res.json({
              succes:true,
              msg: "Tipo de comercio Creado",
              payload: newCommerceType
          })
      }
  } catch (err) {
      res.json({
          succes: false,
          msg: "No se pudo crear el tipo de comercio",
          payload: null
      });
  }
};

const updateCommerceType = async (id, name) => {
  const commerceType = await CommerceType.findOneAndUpdate(
    { _id: `${id}` },
    { name },
    { new: true }
  );
  return commerceType ? commerceType : false;
};

const deleteTypeCommerce = async (id) => {
  const typeDelete = await CommerceType.deleteOne({ _id: `${id}` });
  return typeDelete.deletedCount === 1 ? true : false;
};

module.exports = commerceTypeController;
