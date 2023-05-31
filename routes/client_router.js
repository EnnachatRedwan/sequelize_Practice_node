const express = require("express");
const clientController = require("../controllers/client_controller");

const router = express.Router();

router.get("/", clientController.getClients);

router.post("/", clientController.postClient);

router.put("/", clientController.putClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;
