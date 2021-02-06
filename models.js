const mongoose =require("mongoose")

const {Schema} = mongoose;

const bankSchema = new Schema({
    name:    String,
    location: String,
    branch: String ,
    phone: Number,
    address: String,
    accounntNumber: String
     
  })

  const Bank = mongoose.model("Bank", bankSchema)
  
  module.exports = Bank



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



