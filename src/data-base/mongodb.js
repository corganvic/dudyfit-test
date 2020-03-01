const mongoose = require('mongoose');
const environments = require('../config/config');
const User = require('../models/Users');
const Trainers = require('../models/Trainers');

class MongoDB {
  constructor() {
    mongoose.connect(environments.DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(db => { console.log("BBDD connected") })
    .catch(err => console.log("Error: ", err))
    process.on('SIGUNT', () => {
      mongoose.connection.close(() => {
        console.log("DDBB disconnected");
        process.exit(0);
      });
    });
  }

  async read(model, queryParams) {
    switch (model) {
      case 'User':
        try {
          const users = await User.find(queryParams);
          return users;
        } catch (error) {
          return 'Error: ddbb error';
        }
      case 'Trainer':
        try {
          const trainers = await Trainers.find(queryParams);
          return trainers;
        } catch (error) {
          return 'Error: ddbb error';
        }
      default:
        return 'Error: ddbb error';
    }
  }

  async create(model, queryParams) {
    switch (model) {
      case 'User':
        try {
          const user = await User.create(queryParams);
          return user;
        } catch (error) {
          return 'Error: ddbb error';
        }
      case 'Trainer':
        try {
          const trainer = await Trainers.create(queryParams);
          return trainer;
        } catch (error) {
          return 'Error: ddbb error';
        }
      default:
        return 'Error: ddbb error';
    }
  }

  async update(model, item2Update, updateQuery) {
    switch (model) {
      case 'User':
        try {
          const user = await User.findOneAndUpdate(this._prepareFilterObj(item2Update), this._prepareUpdateQuery(updateQuery));
          return user;
        } catch (error) {
          return 'Error: ddbb error';
        }
      case 'Trainer':
        try {
          const trainer = await Trainers.findOneAndUpdate(this._prepareFilterObj(item2Update), this._prepareUpdateQuery(updateQuery));
          return trainer;
        } catch (error) {
          return 'Error: ddbb error';
        }
      default:
        return 'Error: ddbb error';
    }
  }

  async delete(model, item2Delete) {
    switch (model) {
      case 'User':
        try {
          const user = await User.findOneAndDelete(this._prepareFilterObj(item2Delete));
          return user;
        } catch (error) {
          return 'Error: ddbb error';
        }
      case 'Trainer':
        try {
          const trainer = await Trainers.findOneAndDelete(this._prepareFilterObj(item2Delete));
          return trainer;
        } catch (error) {
          return 'Error: ddbb error';
        }
      default:
        return 'Error: ddbb error';
    }
  }

  _prepareFilterObj(item) {
    return { _id: item._id }
  }

  _prepareUpdateQuery(updateQuery) {
    return { "$set": updateQuery}
  }
}



module.exports = new MongoDB;