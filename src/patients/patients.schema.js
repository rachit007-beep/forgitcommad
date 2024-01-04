import mongoose from 'mongoose';

// Schema for patient 
const patientSchema = mongoose.Schema({
    doctorId:{type:Object},
    name:{type:String,required:true},
    contactNumber:{type:Number,required:true,unique:true},
    email:{type:String},
    address:{type:String,required:true}

})

// model for adding a new patient 
const patiModel = mongoose.model('patient',patientSchema);

export {patiModel}