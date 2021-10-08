const Clients = require("../models/Clients");
const clientsController = {};

// FILTER
clientsController.filtersClient = async (req, res, next) => {
    const { key, value } = req.query;
    try{
        const list = await Clients.find();
        const filters = list.filter((client) => {
            if(typeof value === Number) return client[key] === value;
            return client[key].includes(value.toLocaleLowerCase())
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
clientsController.findClients = async (_req, res, next) => {
    try{
        const clients = await Clients.find();
        if (clients.length) {
            res.json({
                succes: true,
                msg: "Clientes encontrados",
                payload: clients
            })
        } else {
            res.json({
                succes: false,
                msg: "Clientes no encontrados",
                payload: null
            })
        }
    } catch (err) {
        next(err);
    }
};

// POST
clientsController.addClient = async (req, res, _next) => {
    const payload  = req.body;
    try{
        const client = await Clients.findOne({name : payload.name})
        if(client) {
            res.json({
                succes: false,
                msg: "Este cliente ya existe",
                payload: null
            })
        } else {
            const newClient = await new Clients(payload);
            await newClient.save();
            res.json({
                succes:true,
                msg: "Cliente Creado",
                payload: newClient
            })
        }
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo crear el cliente",
            payload: null
        });
    }
};

// DELETE
clientsController.deleteClient = async (req, res, _next) => {
    const { id } = req.params;
    try {
        await Clients.deleteOne({ _id: `${id}` });
            return res.json({
                succes: true,
                msg: "Cliente eliminado exitosamente",
                payload: null,
            });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo eliminar el cliente",
            payload: err,
        });
    }
};

// UPDATE/PUT
clientsController.updateClient = async (req, res, _next) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const updatedClient = await Clients.findOneAndUpdate(
        { _id: `${id}` },
        payload,
        {new: true,}
        );
        return res.json({
            succes: true,
            msg: "Cliente modificado exitosamente",
            payload: updatedClient,
        });
    } catch (err) {
        res.json({
            succes: false,
            msg: "No se pudo modificar el cliente",
            payload: err,
        });
    }
};

module.exports = clientsController;
