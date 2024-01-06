import { model } from "./doc.schema.js";
import bcrypt from 'bcrypt';

// model for doctors
export class docModel{
 // registartion of doctors
   static async add(obj){
    try{
    const password = obj.password;
    // hashed password using bcrypt
    const hashpasssword = bcrypt.hash(password,12);
    const docModel = new model({username:obj.username,email:obj.email,password:(await hashpasssword)});
      await  docModel.save();
    return docModel
  }catch(err){
    console.log(err);
  }
}
// for login of doctors 
   static async login(obj){
    try{
    const result = await model.findOne({email:obj.email});
    
    return result;
    }catch(err){
      throw Error(err.message);
      
    }
   }
}