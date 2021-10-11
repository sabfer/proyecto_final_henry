const Commerce = require("../models/Commerce");
const commerceController = {};

// FILTER

commerceController.filtersCommerce = async (req, res, next) => {
    const { key, value } = req.query;
    try{
        const list = await Commerce.find();
        const filters = list.filter((commerces) => {
            return commerces[key].includes(value.toLocaleLowerCase())
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
commerceController.findCommerce = async (_req, res, next) => {
    try{
        const commerce = await Commerce.find();
        if (commerce.length) {
            res.json({
                succes: true,
                msg: "Comercios encontrados",
                payload: commerce
            })
        } else {
            res.json({
                succes: false,
                msg: "No hay comercios encontrados",
                payload: null
            })
        }
    } catch (err) {
        next(err);
    }
};

// POST
commerceController.addCommerce = async (req, res, _next) => {
    const payload  = req.body;
    try{
        const commerce = await Commerce.findOne({name : payload.name})
        if(commerce) {
            res.json({
                succes: false,
                msg: "Este comercio ya existe",
                payload: null
            })
        } else {
            const newCommerce = await new Commerce(payload);
            await newCommerce.save();
            res.json({
                succes:true,
                msg: "Comercio creado  exitosamente!",
                payload: newCommerce
            })
        }
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo crear el comercio",
            payload: null
        });
    }
};

// DELETE
commerceController.deleteCommerce = async (req, res, _next) => {
    const { id } = req.params;
    try {
        await Commerce.deleteOne({ _id: `${id}` });
            return res.json({
                succes: true,
                msg: "Comercio eliminado exitosamente",
                payload: null,
            });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo eliminar el comercio",
            payload: err,
        });
    }
};

// UPDATE/PUT
commerceController.updateCommerce = async (req, res, _next) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const updatedCommerce = await Commerce.findOneAndUpdate(
        { _id: `${id}` },
        payload,
        {new: true,}
        );
        return res.json({
            succes: true,
            msg: "Comercio modificado exitosamente",
            payload: updatedCommerce,
        });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo modificar el comercio",
            payload: err,
        });
    }
};

module.exports = commerceController;
