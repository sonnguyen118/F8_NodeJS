const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String},
  description: {type: String},
  image: {type: String},
  createAt: {type: Date, default: Date.now},
  updateteAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);