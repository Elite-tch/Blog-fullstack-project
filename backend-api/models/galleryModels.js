const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  replier: String,
  text: String,
  createdAt: {
        type: Date,
        default: Date.now
    }
});

const commentSchema = new Schema({
  commenter: String,
  text: String,
  replies: [replySchema],
  createdAt: {
        type: Date,
        default: Date.now
    }
});

const devSchema = new Schema({
  title: String,
  snippet: String,
  body: mongoose.Schema.Types.Mixed,
  image: String,
  hashtags: String,
  tagOne: String,
  tagTwo: String,
  tagThree: String,
  tagFour: String,
  tagFive: String,
  tagSix: String,
  author: String,
  readMins: String,
  categories: String,
  comments:[commentSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Gallery = mongoose.model('Gallery', devSchema);

module.exports = Gallery;
