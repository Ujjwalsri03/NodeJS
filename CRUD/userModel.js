const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const userModel = new mongoose.Schema({
    
    name : {type : String, required: true },
    email : {type : String,required: true },
    password: {type: Number, required: true}

})

const user = mongoose.model("User", userModel);

module.exports = user ;