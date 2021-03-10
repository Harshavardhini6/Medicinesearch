let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for Medicine
let Medicine = new Schema({
  name: {
    type: String
  },
  component1: {
    type: String
  },
  component2: {
    type: String
  },
  component3: {
    type: String
  },
  component4: {
    type: String
  },
},{
    collection: 'medicines'
});

module.exports = mongoose.model('Medicine', Medicine);