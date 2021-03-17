const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const {signupController, signinController} = require("../controllers/user")
const userModel = require("../models/user")


router.put("/signup",[
    body("name").trim().not().isEmpty().withMessage("name must not be empty"),
    body("email").isEmail().withMessage("provide a valid emaail").custom((value, {req}) =>{
        return userModel.findOne({email: value}).then(
            userDoc =>{
                if(userDoc){
                    return Promise.reject("email already taken");
                }
            }
        )
    }),
    body("password").trim().isLength({min: 8})
], signupController);




router.post("/signin", [
    body("email").isEmail().withMessage("provide a valid emaail"),
    body("password").trim().isLength({min: 5}),
], signinController)

module.exports = router;