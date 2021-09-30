const express = require("express");
const router = express.Router();

const {
  clientByName,
  searchClients,
  filterClient,
  addClient,
  deleteClient,
  updateClient
} = require("../controllers/clients.js");

router.get("/", async function (req, res) {
  const {name} = req.query;

  try{
    if (name){ 
      const client = clientByName(name);
      client ? res.send(client)
      : res.status(404).send("Product not exists");
    } else {
        const listClients = await searchClients();
        listClients ? res.send(listClients)
        : res.status(404).send("Clients not exists");
    } 
  } catch (err) {
    console.error(err);
  }
  
}); 

router.post("/", async function (req, res) {
  const { name, phone, direction } = req.body;

    try{
      const searchClient = await filterClient(name);

      if(searchClient) {
        res.status(404).send("Client already exists") 
      } else {
        const client = await addClient(name, phone, direction);
        res.send(client);
      }
    } catch(err){
      console.error(err);
    }
});

router.delete("/:id", async function(req, res) {
  const {id} = req.params;
  try{
      const deleted = await deleteClient(id);
      deleted ? res.send('Clients deleted successfully!')
      : null;
  } catch (err) {
      res.status(400).send("Client not exists");
  }
})

router.put("/:id", async function(req, res) {
  const {id} = req.params;
  const clientsUpdate = req.body;

  try {
      const update = await updateClient(id, clientsUpdate)
      update ? res.send('Clients updated successfully!')
      : null; 
  } catch (err) {
      res.status(400).send("Client not exist") 
  }
}) 



module.exports = router;
