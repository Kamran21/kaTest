var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var volounteerSchema = new Schema({
  user:  String,
  password: String
});

module.exports = mongoose.model("volounteer",volounteerSchema);