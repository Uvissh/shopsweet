const service = require('./sweets.service');

exports.addSweet = async (req, res) => {
  res.json(await service.addSweet(req.body));
};

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.purchase = async (req, res) => {
  res.json(await service.purchase(req.params.id));
};

exports.restock = async (req, res) => {
  res.json(await service.restock(req.params.id, req.body.amount));
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.sendStatus(204);
};