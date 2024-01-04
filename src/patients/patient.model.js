import { patiModel } from "./patients.schema.js";

// model class for Patient
export class PatientModel{
// function for addding a new patient in database 
    static async registration(obj,id){
        try{
            // find the patient with contactnumber
        const exist = await patiModel.findOne({contactNumber:obj.contactNumber});
        if(exist){
            return "Patient already exist";
        }else{
            const add = new patiModel({doctorId:new Object(id),name:obj.name,contactNumber:obj.contactNumber,email:obj.email,address:obj.address});
            // adding the patient in database
            await add.save();
            return add;
        }
    }catch(err){
        console.log(err);
    }
    }
}