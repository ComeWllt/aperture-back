const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;