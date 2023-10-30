const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  year: Number,
});

module.exports = mongoose.model('Car', carSchema);
