const crudDAO = require('../daos/crudDAO');

/*
  ResponseObjet structure
  {
    assigned: Array<object> [
      {
        trainerName: String,
        assignedUsers: Array<object> [
          {
            id: ObjectId,
            userName: String
          }
        ],
        remainingPlaces: Number
      },
      ...
    ]
    queuing: Array<object> [
      {
        id: ObjectId,
        userName: String
      }, 
      ...
    ]
  }
*/

exports.assignTrainer = async (req,res) => {
  const userList = await [...crudDAO.getAll('User', {})];
  const trainerList = await [...crudDAO.getAll('Trainer', {})];
  const responseObj = {
    "assigned": [],
    "queuing": []
  }
  userList.sort((a,b) => b.relevanceRate - a.relevanceRate);
  trainerList.sort((a,b)=> b.rateReputation - a.rateReputation).forEach(trainer => {
    responseObj.assigned.push(createObject(trainer, userList))
  });
  if (userList.length > 0) {
    userList.forEach( user => {
      responseObj.queuing.push(user);
    })
  }
  res.send(responseObj);
}

function createObject(trainer, userList) {
  let obj = {};
  obj.trainerName = trainer.name;
  obj.assignedUsers = [];
  obj.remainingPlaces = trainer.availablePlaces;
  return assigUsers2Trainer(obj, userList);
}

function assigUsers2Trainer(obj, userList) {
  if (obj.remainingPlaces > 0 ) {
    if (userList.length === 0) return obj
    obj.remainingPlaces-=1;
    obj.assignedUsers.push(userList.shift());
    return assigUsers2Trainer(obj, userList);
  }
  return obj;
}