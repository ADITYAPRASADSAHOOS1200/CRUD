const User=require('../models/userModel.js')


exports.home=(req,res)=>{
    res.send("hello world!");
}

exports.createUser=async(req,res)=>{
    //extract info

    try{
       const{name,email}=req.body;
       if(!name || !email){
        throw new Error("name and email required");
       }

    const user=await User.create({
            name,
            email
        })
        res.status(200).json({
            success:true,
            message:"user created succesfully",
            user
        })
       
    }
    catch(error){
     console.log(error.message);
     res.status(400).json({
        success:false,
        message:error.message, 
      })
    }
}

exports.getUsers= async(req,res)=>{

    try{
        const users= await User.find({}) 
        if(users.length<0){
             throw new error("no users are there")
        }
        res.status(200).json({
           success:true,
           message:"created successfully",
           users
          })

    }catch(error){
        console.log(error.message);
        res.status(400).json({
           success:false,
           message:error.message, 
         })
       }
}
exports.editUsers=async(req,res)=>{
  try{
     const user=await User.findByIdAndDelete(req.params.id,req.body)
     
     res.status(200).json({
      success:true,
           message:"created successfully",
           user 
     })
  }catch(error){
    console.log(error.message);
    res.status(400).json({
       success:false,
       message:error.message, 
     })
   }
}

exports.deleteUsers=async(req,res)=>{
   try{
    const userId= req.params.id;
   const user=await User.findByIdAndDelete(userId);
   res.status(200).json({
    success:true,
    message:"deleted successfully",
    user
   })

 }catch(error){
    console.log(error.message);
    res.status(400).json({
       success:false,
       message:error.message, 
     })
   }

}