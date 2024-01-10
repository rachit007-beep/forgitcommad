
import { model } from "./doc.schema.js";
import bcrypt from 'bcrypt';

// model for doctors
export class docModel{
 // registartion of doctors
   static async add(obj){
    try{
      const exist =  await model.findOne({email:obj.email});
      console.log(exist)
      if(!exist){
    const password = obj.password;
    // hashed password using bcrypt
    const hashpasssword = bcrypt.hash(password,12);
    const docModel = new model({username:obj.username,email:obj.email,password:(await hashpasssword)});
      await  docModel.save();
    return docModel;
      }else{
      return {
        details:exist,
        msg:"Already Registered! Please go to login "
      };
      }
  }catch(err){
    return {
      success:false,
      msg:err.message
    };
  }
}
// for login of doctors 
   static async login(obj){
    try{
    const result = await model.findOne({email:obj.email});
    
    if(!result){
      return {
        success:false,
        msg:"Please try again!"
      }
    }
    return {
      success:true,
      details:result
    };
  }catch(err){
    return {
      success:false,
      msg:err.message
    }
  }
    

      
      
    
  }
}