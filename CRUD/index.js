const express = require('express');
const app = express();


const User = require('./userModel')
app.use(express.json());


app.get("/create", async (req, res) => {
  const newUser = await User.create({ 
    name : "Ujjawal",
    email: "Munna98@gmail.com",
    password : "12345678"});
    
    res.send(newUser);
})

app.get('/read', async (req, res) => {
   const users = await User.find();

   res.send(users)
})

app.get('/update', async (req, res) => {
   const userUpdate = await User.findOneAndUpdate({email: "Richa98@gmail.com" }, {name: "sudhir"}, {new : true});

   res.send(userUpdate)
})

app.get('/delete', async (req, res) => {
   const userDelete = await User.findOneAndDelete({email: "Richa98@gmail.com" });

   res.send(userDelete)
})

app.listen(3000, () => {
    console.log("server is running at port 3000");
})