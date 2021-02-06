const express = require("express");
const bodyParser = require("body-parser");
const {   bankListController, createBankController, updateBankController,  deleteBankController} = require("./controllers") 

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Alfred:alfred815@cluster0.6zspx.mongodb.net/BankDB?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true});

const server = express();
 
// Middleware
server.use(bodyParser.json());




// Routes
server.get("/bank", bankListController);
server.post("/bank", createBankController);
server.put("/bank", updateBankController);
server.delete("/bank", deleteBankController);



server.listen(3000,  ()=> console.log("server is ready "));