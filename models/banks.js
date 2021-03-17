const mongoose = require("mongoose");

const { Schema } = mongoose;

const BankSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  location: String,

  branch: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  accounts: [
    { type: Schema.Types.ObjectId, ref: "Account"}
  ],
});

const BankModel = mongoose.model("Bank", BankSchema);

module.exports = BankModel;

// const banksDatabase = require("./database");

// // Models
// class BankModels {
//     constructor({name, location, branch, phone, address, accountNumber}) {
//      this.name = name;
//      this.location = location;
//      this.branch = branch;
//      this.phone = phone;
//      this.address = address;
//      this.accountNumber = accountNumber;

//     }

//     save(){
//       banksDatabase.push(this);
//       return this;
//     }

//     static update(updateInfo = {}){
//       banksDatabase = banksDatabase.map(bank =>{
//         if(bank.name === updateInfo.name){
//           return{...bank, ...updateInfo}
//         }
//         return bank
//       })
//     }

//     static all(){
//      return banksDatabase;
//    }

//    static delete ({name}){
//      let deletedBank = null;
//     banksDatabase = banksDatabase.filter(bank =>{
//        if(bank.name !== name){
//          return true;
//        }
//        deletedBank = bank;
//        return false;
//      });
//      return deletedBank;
//    }

// }

// module.exports = BankModels
