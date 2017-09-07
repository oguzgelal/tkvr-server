const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  
  /*--- defines the tag ---*/

  // type of tag data ('string', 'number', 'date', 'user_id', 'resource_id' etc.)
  tag_data_type: { type: String, default: 'string' },
  
  // tags data
  tag_data: { type: Schema.Types.Mixed, required: true },

  // which app(s) should this be visible from
  app: { type: [String], default: ['general'] },
  
  
  /*--- resource the tag is attached ---*/

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

module.exports = mongoose.model('Tags', tagsSchema);