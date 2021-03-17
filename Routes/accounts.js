const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const {createAccountController, listAccountController} = require ("../controllers/accounts")


router.post("/account",[
    body("name").trim().not().isEmpty().withMessage("accountName cannot be empty"),
    body("number").isNumeric().withMessage("accountNumber must be numeric"),
    body("accountType").trim().not().isEmpty().withMessage("please provide the type of account"),
    body("bankID").trim().not().isEmpty().withMessage("bank ID cannot be empty"),


], createAccountController);
router.get("/account", listAccountController);

module.exports= router;
