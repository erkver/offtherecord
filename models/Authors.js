const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  authorName: {
    type: String,
    required: true
  },
  authorEmail: {
    type: String,
    required: true
  },
  authorUsername: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Authors', AuthorSchema);