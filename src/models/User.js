const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  // Your code goes here
  name:{
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  email:{
      type: String,
      required:true,
      max: 255,
      min: 6,
  },
  password:{
      type: String,
      required: true,
      max: 1024,
      min: 6,
  },
  date:{
      type: Date,
      default: Date.now,
  }
})

const User = mongoose.model('user',userSchema);

module.exports = User;