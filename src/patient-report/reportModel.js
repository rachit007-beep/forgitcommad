import { repModel } from "./report.schema.js";

// patient reort model
export class ReportModel{
// function for creating new report for patient
    static async add(obj,pId,dId){
        try{
    // creating the instance of report model
    const report = new repModel({createdByDoctor:obj.createdByDoctor,status:obj.status,
        patientId:pId.id,doctorId: new Object(dId)
    
    });
    // for saving a report in database
     await report.save();
    return report;

    }catch(err){
        console.log(err);
    }
}
// function for getting a all reports of a patients 
   static async getAllreports(obj){
    
    try{
        // finding the report in databse with patient id
       const result =  await repModel.find({
        patientId:obj.id
        });
        
        return result
    }catch(err){
        console.log(err)
    }
   }
   // function for getting all reports with status
    static async getStatus(obj){
     try{
        // finding the reports from database with specific status
      const result = await repModel.find({
        status:obj.status})
        return result;
     }catch(err){
        console.log(err);
     }
  }
}