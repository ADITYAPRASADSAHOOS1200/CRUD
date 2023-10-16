const mongoose=require('mongoose');

const userschema= new mongoose.Schema({ 

    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true,
        maxLength:[20,"name is less than 20"],
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,
        
    }

 })

module.exports=mongoose.model("User",userschema);