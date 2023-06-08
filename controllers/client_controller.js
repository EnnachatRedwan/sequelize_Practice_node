const Client = require("../models/client");

exports.getClients = (req, res, next) => {
  Client.findAll()
    .then((clients) => res.json(clients))
    .catch((err) => console.log(err));
};

exports.postClient = (req, res, next) => {
  const client = req.body;
  Client.create({
    ...client,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.deleteClient = (req, res, next) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then((client) => {
      return client.destroy();
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};

exports.putClient = (req, res, next) => {
  const client = req.body;
  Client.findByPk(client.id)
    .then((oldClient) =>
      oldClient.update(client)
    )
    .then((result) => req.status(200).json(result))
    .catch((err) => console.log(err));
};
