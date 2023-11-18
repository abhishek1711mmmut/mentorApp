const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:['admin', 'student', 'company'],
        required:true
    },
    experience:{
        type:String,
    },
    specialisation:{
        type:String,
    },
    appointments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appointment'
        }
    ],
    calendlyKey:{
        type:String
    }
},
// Add timestamps for when the document is created and last modified
{ timestamps: true }
);

module.exports=mongoose.model('User', userSchema);