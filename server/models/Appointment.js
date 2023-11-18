const mongoose=require('mongoose');

const appointmentSchema=new mongoose.Schema({
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

module.exports=mongoose.model('Appointment', appointmentSchema)