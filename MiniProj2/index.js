// 
// console.log(path.join(__dirname, 'public'))

const express = require('express');
const app = express();
const path = require("path");
const userModel = require("./models/user")
 

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res){
    
    res.render("index");     
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.render("read", {users});
})

app.post("/create", async (req, res) => {
    let {name,email,image} = req.body;
    let user = await userModel.create({
        name,
        email,
        image
    })

    res.redirect("/read");
})

app.get("/delete/:id", async(req,res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read")
})

app.get("/edit/:id", async(req,res) => {
    let users = await userModel.findOne({_id: req.params.id});
    res.render("edit", {users});
})

// app.get("/profile/:username", function(req,res){
    
//     res.send(`welcome ${req.params.username}`);
// })

app.listen(3000, ()=>{
 console.log("start");
});
