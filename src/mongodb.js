const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/LoginSignUpTutorial')
.then(()=>{
    console.log("Mongodb Connected")
})
.catch(()=>{
    console.log("Failed to connect")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("DBCollection",LogInSchema)

module.exports=collection