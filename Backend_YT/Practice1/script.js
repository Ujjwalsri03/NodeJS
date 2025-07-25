const express = require("express");
const app = express();

//middleware :  server or routes k bich kuchh perform rna ho toh ,middleware use hota hai

// app.use(function(req,res,next){
//     console.log("middleware start");
//     next();
// })

// app.use(function(req,res,next){
//     console.log(" 2nd middleware start");
//     next();
    
// })

app.use(express.json());
app.use(express.urlencoded({extended: true }));  

app.get("/", function(req,res){
    res.send("Ujjwal do it now.")
})

app.get("/login", function(req,res){
    res.send("login page display");
})

// app.get("/profile", function(req,res,next){
//     return next(new Error("something went wrong"));
// })

// app.use(function(err,req,res,next){
//     console.log(err.stack);
//     res.status(500).send('Something broken');
// })



app.listen(3000)