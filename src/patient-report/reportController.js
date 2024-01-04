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
         
        const result = await ReportModel.add(req.body,pid,did);
        if(!result){
          return  res.status(400).send("Bad request");
        }
        else{
          return  res.status(201).send(result);
        }
    }catch(err){
        console.log(err);
    }
    }
    //get all report of a patient from reportmodel
      async getAll(req,res){
        try{
            // getting the id of a patient from url
        const id =req.params;

        const result = await ReportModel.getAllreports(id);
        if(!result){
            return res.status(404).send('Not found');
        }
        else{
            return res.status(200).send(result);
        }
    }catch(err){
        console.log(err);
    }
      }
       // this function for getting a status from report model
      async getStatus(req,res){
        try{
           const status = req.params
           
           const result = await ReportModel.getStatus(status);
           if(!result){
            res.status(404).send('not found');
           }
           else{
            res.status(200).send(result);
           }
        }catch(err){
            console.log(err);
        }
      }
}