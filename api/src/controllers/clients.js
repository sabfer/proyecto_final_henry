const Clients = require("../models/Clients");

// GETS
const clientByName = async(name) => {
    const client = await Clients.findOne({ name: `${name}`});
    return client ? client : null;
}

const searchClients = async() => {
    const clients = await Clients.find();
    return clients ? clients : null;
}

// POST
const filterClient = async(name) => {
    const clients = await Clients.findOne({ name: `${name}`});
    return clients ? true : null;
}

const addClient = async(name, phone, direction) => {
    const newClient = await new Clients({
        name, 
        phone,
        direction
    })
    await newClient.save();
    return newClient;
}

// DELETE
const deleteClient = async(id) => {
    const deleted = await Clients.deleteOne({_id: `${id}`});
    return deleted ? true : false;
}

// UPDATE/PUT
const updateClient = async(id, update) => {
    const updated = await Clients.findOneAndUpdate({_id: id} , update, {new:true})
    return updated ? true : false;
}

module.exports = {
    clientByName,
    searchClients,
    filterClient,
    addClient,
    deleteClient,
    updateClient
};
