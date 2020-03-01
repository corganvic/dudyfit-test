const trainers = require('../daos/crudDAO');

exports.getTrainers = async (req,res) => {
  const response = await trainers.getAll('Trainer', {});
  res.send(response);
}

exports.createTrainer = async (req,res) => {
  const response = await trainers.create('Trainer', req.body);
  res.send(response);
}

exports.updateTrainer = async (req,res) => {
  const response = await trainers.update('Trainer', req.body);
  res.send(response);
}

exports.deleteTrainer = async (req,res) => {
  const response = await trainers.delete('Trainer', req.body);
  res.send(response);
}

