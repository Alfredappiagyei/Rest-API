const mongoose = require("mongoose");


const Schema  = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  type: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  bankId: { 
    type: Schema.Types.ObjectId,
     ref: 'Bank',
 }
 
});

module.exports = mongoose.model("Account", AccountSchema);

 
