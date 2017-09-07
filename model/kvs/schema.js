const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kvsSchema = new Schema({
    
  /*--- defines the key value pair ---*/

  key: { type: String, required: true },
  
  // type of value data ('string', 'number', 'date', 'user_id', 'resource_id' etc.)
  value_data_type: { type: String, default: 'string' },
  
  // value data
  value_data: { type: Schema.Types.Mixed, required: true },

  // which app(s) should this be visible from
  app: { type: [String], default: ['general'] }
  
  
  /*--- resource the kv pair is attached ---*/

  // type of the resource tag is attached ('track', 'note', 'image', 'article' etc.)
  attached_resource_type: String,
  
  // id of the attached resource
  attached_resource_id: String,
  
  // which app is the resource part of ('trackist', 'feedist' etc.)
  attached_resource_app: String,

  
  /*--- misc ---*/

  owner_id: String,

  description: String,

  created: { type: Date, default: Date.now },
  
  updated: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Kvs', kvsSchema);