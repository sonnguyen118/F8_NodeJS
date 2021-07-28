const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
// const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);

const Course = new Schema({
  name: {type: String},
  description: {type: String},
  image: {type: String},
  videoID: {type: String},
  level: {type: String},
  slug: {type: String, slug: 'name', unique: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', Course);