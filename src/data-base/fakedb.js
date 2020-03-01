const data = require('../config/seed')

class FakeDB {
  constructor() {}

  read(model, queryParams) {
    switch (model) {
      case 'User':
        console.log(data)
        return data.users;
      case 'Trainer':
        return data.trainers;
      default:
        return 'Error: ddbb error';
    }
  }

  create(model, queryParams) {
    switch (model) {
      case 'User':
        data.users.push(queryParams)
        return data.users;
      case 'Trainer':
        data.trainers.push(queryParams)
        return data.trainers;
      default:
        return 'Error: ddbb error';
    }
  }

  update(model, item2Update, updateQuery) {
    switch (model) {
      case 'User':
        return this._updateItem(this._findItem(data.users, item2Update), updateQuery, data.users);
      case 'Trainer':
        return this._updateItem(this._findItem(data.trainers, item2Update), updateQuery, data.trainers);
      default:
        return 'Error: ddbb error';
    }
  }

  delete(model, item2Delete) {
    switch (model) {
      case 'User':
        this._deleteItems(this._findItem(data.users, item2Delete), data.users);
        return data.users;
      case 'Trainer':
        this._deleteItems(this._findItem(data.trainers, item2Delete), data.trainers);
        console.log('estoy aquiiiii',data.trainers)
        return data.trainers;
      default:
        return 'Error: ddbb error';
    }
  }

  _findItem(data, look4Item) {
    return data.findIndex(e=>e._id == look4Item._id);
  }

  _updateItem(indexElement, updateQuery, data) {
    for(let item in updateQuery) {
      data[indexElement][item] = updateQuery[item];
    }
    return data[indexElement];
  }

  _deleteItems(indexElement, data) {
    data.splice(indexElement, 1);
  }
}



module.exports = new FakeDB;