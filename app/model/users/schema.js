const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usersSchema = new Schema({
  name: String,
  first_name: String,
  last_name: String,
  picture: String,
  email: { type: String, required: true },
  google_id: String
});


module.exports = mongoose.model('Users', usersSchema);