const BankModel = require("../models/banks");
const AccountModel = require("../models/account")
const {validationResult} = require("express-validator")

// Contollers
const bankListController = (req, res) => {
    

    const banks = Bank.find({})
      .then((data) => res.json({ data: data }))
      .catch((err) => res.json({ message: "Not successful", data: res }));
  };
  
  const createBankController = (req, res) => {

      // Validation Check
  const errors = validationResult(req);
  if(!errors){
    console.log(errors);
      return res.json({message: "failed to create bank"}); 
  }
    const { name, location, branch, phone, address, accountNumber } = req.body;
  
    const bank = new BankModel({
      name,
      location,
      branch,
      phone,
      address,
      accountNumber,
    });
  
    bank.save();
  
    res.json({ message: "Create successful", data: bank });
  };
  
  const updateBankController = async (req, res) => {
    //  update banks
    const {
      name,
      location,
      branch,
      phone,
      address,
      accountNumber,
      _id,
    } = req.body;
  
    // Bank.findById(_id).then((bank)=> {
    //   if (bank) {
    //     bank.name = name;
    //     bank.location = location;
    //     bank.branch = branch;
    //     bank.phone = phone;
    //     bank.address = address;
    //     bank.accountNumber = accountNumber;
    //     res.json({message: "udpated successfully", data: bank})
    //   } else {
    //     res.json({message: "bank with id not found"})
    //   }
    // }).catch(err => console.log(error))
  
    try {
      const updatedBank = await Bank.findByIdAndUpdate(_id, {
        name,
        location,
        branch,
        phone,
        address,
        accountNumber,
      }, {new: true});
      res.json({ message: "Update successful", data: updatedBank });
    } catch (err) {
      res.json({ message: "Not Successful", data: err });
    }
  };
  
  const deleteBankController = (req, res) => {
    //  DELETE banks
    const { _id } = req.body;
     deletedBank = Bank.findByIdAndRemove(_id).then(deletedBank => {
       if (deletedBank) {
         AccountModel.deleteMany({bankID: deletedBank._id}).then(result => {
          res.json({ message: "Bank deleted", data: deletedBank });
         }).catch(err => console.log(err));
        
        return;
       }
       res.json({message: "bank not found"});
     });
    
  };


  module.exports = {
    bankListController,
    createBankController,
    updateBankController,
    deleteBankController,
  }