const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProvSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name:{
    type: String,
    required: true,
    unique: true,
  },
  mail:{
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type: String,
    maxLength: 500,
    required: true,
  },
  isDeleted:{
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Proveedores', ProvSchema)