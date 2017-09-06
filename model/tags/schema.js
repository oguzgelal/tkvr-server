const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  type: String,
  data: Schema.Types.Mixed,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Tags', tagsSchema);