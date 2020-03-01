const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rateReputation: {
    type:  Number,
    required: true,
    trim: true,
    min: 0, 
    max: 5
  },
  availablePlaces: {
    type:  Number,
    required: true,
    trim: true,
    min: 1,
  },
}, {timestamps: true});

module.exports = mongoose.model('trainers', TrainerSchema);
