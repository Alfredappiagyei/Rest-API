
const UserModel = require("../models/user");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const { JsonWebToken } = require("jsonwebtoken");


const signupController = (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       console.log(errors);
       return res.json({massage:errors.array()[0].msg});
   }


    const {name, email, password} = req.body;
    
    bcrypt.hash(password, 7).then(hashedPassword => {
        const user = new UserModel({name, email, password: hashedPassword});

        user.save().then(user =>{
            res.json({"massage": "signup successful"," data":{name:user.name, email:user.email}});
   }).catch(err => console.log(err));
    }).catch(err => console.log(err));
    
}


const signinController = async (req, res) => {

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({massage:errors.array()[0].msg});
        }

        const { email, password} = req.body;

        // find user
       const user = await UserModel.findOne({email});

       if(!user){ 
          return res.json({massage: "user not found"});

       }

    //    compare words
    const isAuth = await bcrypt.compare(password, user.password);
       if(!isAuth){
         return res.json({massage: "please provide a correct email and password"});
       }

       const token = JsonWebToken.sign(
           {name: user.name, password:user.password, userID: user. _id},
           "keythatcannotbeeasilyguessed",
           {expiresIn: "1h"}
       );
       return res.json({massage: "user logged in successfuly", token});
  
    }catch(error){
        res.json({massage:"please try again"});
    }
       
 }






module.exports = { 
    signupController,
    signinController,
}