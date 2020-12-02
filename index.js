const express = require("express");
const bodyParser = require("body-parser")

const server = express();

 
// Middleware
server.use(bodyParser.json());


// Database
let banksDatabase = [];


// Models
class BankModels {
     constructor({name, location, branch, phone, address, accountNumber}) {
      this.name = name;
      this.location = location;
      this.branch = branch;
      this.phone = phone;
      this.address = address;
      this.accountNumber = accountNumber;

     }

     save(){
       banksDatabase.push(this);
       return this;
     }

     static update(updateInfo = {}){
       banksDatabase = banksDatabase.map(bank =>{
         if(bank.name === updateInfo.name){
           return{...bank, ...updateInfo}
         }
         return bank
       })
     }
     static all(){
      return banksDatabase;
    }


    static delete ({name}){
      let deletedBank = null;
     banksDatabase = banksDatabase.filter(bank =>{
        if(bank.name !== name){
          return true;
        }
        deletedBank = bank;
        return false;
      });
      return deletedBank;
    }

    
}


// Contollers
const bankListController = (req, res) =>{
  // List all banks
  const banks = BankModels.all();
  res.json({data:banks })


}

const createBankController = (req, res) =>{
  //  creat banks
  const {name, location, branch, phone, address, accountNumber} = req.body;
  
  const bank =new BankModels({name, location, branch, phone, address, accountNumber});

  bank.save();
  
  res.json({message:"Create successful", data:bank })
}



const updateBankController = (req, res) =>{
  //  update banks
  const {name, location, branch, phone, address, accountNumber} = req.body;

  const updateBank = BankModels.update({name, location, branch, phone, address, accountNumber});
  res.json({message:"Update successful", data:updateBank })
}

const deleteBankController = (req, res) =>{
  //  DELETE banks
   const {name} = req.body;
   const deletedBank = BankModels.delete({name});
   res.json({message:"Bank deleted", data:deletedBank })
}



// Routes
server.get("/bank", bankListController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);








server.listen(3000,  ()=> console.log("server is ready "));