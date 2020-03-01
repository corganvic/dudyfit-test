const users = require('../daos/crudDAO');

exports.getUsers = async (req,res) => {
  const response = await users.getAll('User', {});
  res.send(response);
}

exports.createUser = async (req,res) => {
  const response = await users.create('User', req.body);
  res.send(response);
}

exports.updateUser = async (req,res) => {
  const response = await users.update('User', req.body);
  res.send(response);
}

exports.deleteUser = async (req,res) => {
  const response = await users.delete('User', req.body);
  res.send(response);
}