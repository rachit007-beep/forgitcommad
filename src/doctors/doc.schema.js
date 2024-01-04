import mongoose from "mongoose";

// schema for doctors 
const docSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{type:String,required:true,unique:true}
})
// model for doctors
const model = mongoose.model('Pandemic',docSchema);

export {model}

