import { docModel } from './doc.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// controller for handling registation and login for doctors
export class Controller{
// registation of doctors
 async registation(req,res){
    
    try{
        
        const result = await docModel.add(req.body);
              console.log(result);
        if(!result){
            res.status(400).send("Please try again!")
        }
         res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
        
}
}
// for login of doctors
   async login(req,res){
    
    try{
     const user =  await docModel.login(req.body);
     console.log(user)
    if(user.success){
        console.log(user);
          const pass = await bcrypt.compare(req.body.password,user.details.password);
          console.log(pass)
         if(pass){
        // jwt token for login
        const token =  jwt.sign({
            userId:user.details._id,
            userName:user.details.username
        },process.env.JWT_Secret,{ expiresIn: '2h' })
      return  res.status(200).send({
        success:true,
        token:token
      });
    
     }
     
    }
    return res.status(400).json(user);
    
    }catch(err){
        console.log(err);
        return res.send(500).send(err.message);
    }

   }
}