import mongoose, { Model } from "mongoose";
// patients reports Schema
const reportSchema = mongoose.Schema({
    createdByDoctor:{type:String,required:true},
    status:{type:String,enum:["Negative","Travelled-Quarantine","Symptoms-Quarantine","Positive-Admit"],required:true},
    patientId:{type:Object, required:true},
    doctorId:{type:Object,required:true},
    date:{ type : Date, default: Date.now }
   
})
// Patient report model
const repModel = mongoose.model('reports',reportSchema);

export {repModel};