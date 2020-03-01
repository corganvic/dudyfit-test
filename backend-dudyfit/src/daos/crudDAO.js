//If you want connect a MongoDb database replace fakeDB to mongoDB and uncomment the next line
//const mongoDB = require('../data-base/mongodb');
const fakeDB = require('../data-base/fakedb');

class CrudDAO {
  constructor() {
  }

  getOne(collection, queryParams) {
    if (queryParams.constructor !== Object || Object.entries(queryParams).length !== 0  ) {
      return fakeDB.read(collection, queryParams);
    }
    return 'Error: query error';
  }

  getAll(collection, queryParams) {
    return fakeDB.read(collection, queryParams);
  }

  create(collection, queryParams) {
    return fakeDB.create(collection, queryParams);
  }

  update(collection, queryParams) {
    if (queryParams.length === 2) {
      return fakeDB.update(collection, queryParams[0], queryParams[1]);
    };
    return 'Error: query error';
  }

  delete(collection, item2Delete) {
    return fakeDB.delete(collection, item2Delete);
  }
}

module.exports = new CrudDAO;