const CommerceType = require("../models/CommerceType");
const commerceTypeController = {};

// FILTER 
commerceTypeController.filtersCommerceType = async (req, res, next) => {
    const { key, value } = req.query;
    try{
        const list = await CommerceType.find();
        const filters = list.filter((commerce) => {
            return commerce[key].includes(value.toLocaleLowerCase())
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

// DELETE
commerceTypeController.deleteCommerceType = async (req, res, _next) => {
    const { id } = req.params;
    try {
        await CommerceType.deleteOne({ _id: `${id}` });
            return res.json({
                succes: true,
                msg: "Tipo de comercio eliminado exitosamente",
                payload: null,
            });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo eliminar el tipo de comercio",
            payload: err,
        });
    }
};

// UPDATE
commerceTypeController.updateCommerceType = async (req, res, _next) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const updatedCommerceType = await CommerceType.findOneAndUpdate(
        { _id: `${id}` },
        payload,
        {new: true,}
        );
        return res.json({
            succes: true,
            msg: "Tipo de comercio modificado exitosamente",
            payload: updatedCommerceType,
        });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo modificar el tipo de comercio",
            payload: err,
        });
    }
};

module.exports = commerceTypeController;
