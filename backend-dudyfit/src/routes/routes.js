const express = require('express');
const userHandler = require('../handlers/user-handler');
const trainerHandler = require('../handlers/trainer-handler');
const operationHandler = require('../handlers/operation-handler');

const router = express.Router();

router.get('/users', userHandler.getUsers);
router.get('/trainers', trainerHandler.getTrainers);
router.post('/add-user', userHandler.createUser);
router.post('/add-trainer', trainerHandler.createTrainer);
router.post('/delete-user', userHandler.deleteUser);
router.post('/delete-trainer', trainerHandler.deleteTrainer);
router.post('/update-user', userHandler.updateUser);
router.post('/update-trainer', trainerHandler.updateTrainer);

router.get('/assigned', operationHandler.assignTrainer);

module.exports = router;