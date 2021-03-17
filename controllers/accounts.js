
const AccountModel =require("../models/account")
const {validatorResult} = require("express-validator");

const createAccountController =(req, res) => {

  // vallidator check
  const errors = validatorResult(req);
  if(!errors){
    console.log(errors);
      return res.json({message: "failed to create account"}); 
  }
    const {name, type, number, bankId} =req.body;
    const account = new AccountModel ({name, number, accountType, bankID})
    account.save().then(result => {
      if(result)
      res.json({message: "Account created", data: result})
      else
      res.json({message: "Failed to create account"});
    })
  
  }
  
  
  
  const listAccountController =(req, res) => {
     AccountModel.find().populate("bankID").then(accounts =>{
       res.json({data: accounts});
     } ).catch(err => console.log(err));
  
  }
  
  module.exports = {
   
    createAccountController,
    listAccountController
  };
  