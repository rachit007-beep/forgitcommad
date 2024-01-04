import { docModel } from './doc.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// controller for handling registation and login for doctors
export class Controller{
// registation of doctors
 async registation(req,res){
    
    try{
        
        const result = await docModel.add(req.body);

        if(!result){
            res.status(400).send("Please try again!")
        }
         res.status(200).json(result);
    }catch(err){
        console.log(err);
}
}
// for login of doctors
   async login(req,res){
    try{
    
     const user =  await docModel.login(req.body);
     if(user){
        const pass = await bcrypt.compare(req.body.password,user.password);
        // jwt token for login
        const token = jwt.sign({
            userId:user._id,
            userName:user.username
        },process.env.JWT_Secret,{ expiresIn: '1h' })
      return  res.status(200).send(token);
     }
     res.status(404).send('not found')
    }catch(err){
        console.log(err);
    }
   }
}