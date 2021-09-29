const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Clients = require("../models/Clients");

router.get("/", async function (req, res) {
  const {name} = req.query;

  if (name){
      try{
          const client = await Clients.findOne({name:name});
          client ? res.send(client)
          : res.status(404).send("Product not exists");
      } catch(err){
          console.error(err);
      }
  }
  else {
      try {
          const listClients = await Clients.find();
          listClients ? res.send(listClients)
          : res.status(404).send("Clients not exists");
      } catch (err) {
          console.error(err);
      }
  }
}); 

router.post("/", async function (req, res) {
  const { name, phone, direction } = req.body;

  if (name && phone && direction) {
    try{

      const searchClient = await Clients.findOne({name:name});

      if(searchClient) {
        res.status(404).send("Client already exists") 
      } else {
        const client = await new Clients({
          name,
          phone,
          direction,
        });
        await client.save();
        res.send(client);
      }
    } catch(err){
      console.error(err);
    }
  }

});

module.exports = router;
