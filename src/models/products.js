const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name:{
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

module.exports = mongoose.model('Products', ProductsSchema)