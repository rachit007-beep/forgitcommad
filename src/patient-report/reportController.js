import { ReportModel } from "./reportModel.js";

// report controller class
export class ReportController{
// this function create the new report for patient
   async add(req,res){
    try{
         // geeting patient id from url
        const pid = req.params;
        // getting doctor id from token
        const did = req.id;
         const drname = req.drname;
         
        const result = await ReportModel.add(req.body,drname,pid,did);
        if(!result.success){
          return  res.status(400).send(result);
        }
        else{
          return  res.status(201).send(result);
        }
    }catch(err){
        return res.status(500).send(err.message)
    }
    }
    //get all report of a patient from reportmodel
      async getAll(req,res){
        try{
            // getting the id of a patient from url
        const id =req.params;

        const result = await ReportModel.getAllreports(id);
        if(!result.success){
            return res.status(404).send(result);
        }
        else{
            return res.status(200).send(result);
        }
    }catch(err){
        console.log(err);
       return res.status(500).send(err.message)
        
    }
      }
       // this function for getting a status from report model
      async getStatus(req,res){
        try{
           const status = req.params
           console.log(status)
           const result = await ReportModel.getStatus(status);
           
           if(!result.success){
            
             res.status(200).send(result);
           }
           else{
            res.status(404).send(result);
            
           }
        }catch(err){
            
       return res.status(500).send(err.message)
        }
      }
}