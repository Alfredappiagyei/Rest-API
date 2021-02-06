

const Bank = require('./models');

// Contollers
const bankListController = (req, res) =>{
    // List all banks
    const banks = BankModels.all();
    res.json({data:banks })
  
    }
  
  

  
  const createBankController = (req, res) =>{
    //  creat banks
    const {name, location, branch, phone, address, accountNumber} = req.body;
    
    const bank =new Bank({name, location, branch, phone, address, accountNumber});
  
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
  


  module.exports = {
      bankListController,
     createBankController,
      updateBankController, 
      deleteBankController
     }