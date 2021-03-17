const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("./Routes/accounts");
const bankRoutes = require("./Routes/banks");
const userRoutes = require("./Routes/user");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Alfred:alfred815@cluster0.6zspx.mongodb.net/BankDB?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false});

const server = express();
 
// Middleware
server.use(bodyParser.json());
//  Routes
server.use(accountRoutes);
server.use(bankRoutes);
server.use(userRoutes);



server.listen(3000,  ()=> console.log("server is ready "));