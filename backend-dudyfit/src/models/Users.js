const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  relevanceRate: {
    type:  Number,
    required: true,
    trim: true,
    min: 0, 
    max: 10
  }
}, {timestamps: true});

module.exports = mongoose.model('users', UserSchema);
