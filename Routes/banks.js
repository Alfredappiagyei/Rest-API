
const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const {bankListController, createBankController, updateBankController, deleteBankController} = require ("../controllers/banks");
const BankModel = require("../models/banks");



// Routes
router.get("/bank", bankListController);

router.post("/bank",[
    body("name").trim().not().isEmpty().withMessage("name canot be empty"),
    body("address").trim().not().isEmpty().withMessage("address cannot be empty"),
    body("branch").trim().not().isEmpty().withMessage("branch cannot be empty"),
    body("phone").isMobilePhone("en-GH").custom((value, {req}) =>{
        return BankModel.findOne({phone: value}).then(
            bankDoc =>{
                if(bankDoc){
                    return Promise.reject("sorry, phone number already taken");
                }
            }
        )
    })
    
], createBankController);

router.put("/bank", updateBankController);

router.delete("/bank", deleteBankController);

module.exports = router;

