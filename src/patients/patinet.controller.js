import { PatientModel } from "./patient.model.js";


// Patient controller
export class PatientController{

// for adding a new patient
    async registration(req,res){
        console.log(req.body);
        const drname = req.id
        console.log(drname)
        try{
            
          const reg = await PatientModel.registration(req.body,req.id);
          
          if(!reg){
             res.status(400).send('Please try again');
          }
          res.status(201).send(reg);;
        }catch(err){
            console.log(err);
        }
    }
}