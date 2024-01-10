import { repModel } from "./report.schema.js";

// patient reort model
export class ReportModel{
// function for creating new report for patient
    static async add(obj,drname,pId,dId){
        try{
            
    // creating the instance of report model
    const report = new repModel({createdByDoctor:drname,status:obj.status,
        patientId:pId.id,doctorId: new Object(dId)
    
    });
    // for saving a report in database
     await report.save();
    return {
        success:true,
        details:report
    };

    }catch(err){
        console.log(err);
        return {
            msg:err.message
        }
    }
}
// function for getting a all reports of a patients 
   static async getAllreports(obj){
    
    try{
        // finding the report in databse with patient id
       const result =  await repModel.find({
        patientId:obj.id
        });
        if(!result){
            return "Please try again something went wrong";
        }
        return {
            success:true,
            details:result
        }
    }catch(err){
        return{
            success:false,
            msg:err.message
        }
    }
   }
   // function for getting all reports with status
    static async getStatus(obj){
     try{
        // finding the reports from database with specific status
      const result = await repModel.find({
        status:obj.status})
        if(!result){
            return{
                success:true,
                err:result
            }
        }
        else{
            return {
                success:true,
                details:result
            }
        }
     }catch(err){
        console.log(err);
        return {
            success:false,
            msg:err.message
        }
        // console.log(err);
     }
  }
}