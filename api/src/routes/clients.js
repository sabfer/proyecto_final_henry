const express = require("express");
const router = express.Router();

const {
  clientByName,
  searchClients,
  filterClient,
  addClient,
  deleteClient,
  updateClient,
} = require("../controllers/clients.js");

router.get("/", async function (req, res) {
  const { name } = req.query;

  try {
    if (name) {
      const client = clientByName(name);
      client
        ? res.send(client)
        : res.status(404).json({
            status: false,
            msg: "Client with that name does not exist",
          });
    } else {
      const listClients = await searchClients();
      listClients
        ? res.status(200).json(listClients)
        : res.status(404).json({ status: false, msg: "Clients not exists" });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/register", async function (req, res) {
  const { name, phone, direction } = req.body;

  try {
    const searchClient = await filterClient(name);

    if (searchClient) {
      res.status(404).json({ status: false, msg: "Client already exists" });
    } else {
      const client = await addClient(name, phone, direction);
      res.status(200).json(client);
    }
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const deleted = await deleteClient(id);
    deleted
      ? res
          .status(200)
          .json({ status: true, msg: "Clients deleted successfully!" })
      : null;
  } catch (err) {
    res.status(404).json({ status: false, msg: "Client not exists" });
  }
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const clientsUpdate = req.body;

  try {
    const update = await updateClient(id, clientsUpdate);
    update
      ? res
          .status(200)
          .json({ status: true, msg: "Clients updated successfully!" })
      : null;
  } catch (err) {
    res.status(404).json({ status: false, msg: "Client not exist" });
  }
});

module.exports = router;
