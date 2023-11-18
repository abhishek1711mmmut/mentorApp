const Appointment=require('../models/Appointment')
const User=require('../models/User');

// get a list of appointment for a given user
exports.getUserAppointments=async(req, res)=>{
    try {
        // get id
        const userId=req.user.id;

        const accountType=req.user.accountType;

        const path=accountType==="student" ? "student" : "company"

        let appointmentDetails;
        if(accountType==="student"){
            appointmentDetails=await Appointment.find({student:userId}).populate('mentor').populate('student')
        }else{
            appointmentDetails=await Appointment.find({mentor:userId}).populate('student').populate('mentor')
        }

        if (!appointmentDetails) {
            return res.status(400).json({
              success: false,
              message: `Could not find user with id: ${userId}`,
            })
        }

        // return response
        return res.status(200).json({
            success:true,
            data:appointmentDetails
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.bookAppointment=async(req, res)=>{
    try {
        const {mentorId}=req.body;
        const userId=req.user.id;

        // validation
        if(!mentorId || !userId){
            return res.status(403).json({
                success:false,
                message:"userId and mentorId is required"
            })
        }

        // create appointment
        const appointment=await Appointment.create({
            mentor:mentorId,
            student:userId
        })

        // add appointment to mentor
        await User.findByIdAndUpdate(
            {_id:mentorId},
            {
                $push:{
                    appointments:appointment._id
                }
            }
        );

        // add appointment to student
        await User.findByIdAndUpdate(
            {_id:userId},
            {
                $push:{
                    appointments:appointment._id
                }
            }
        );

        // return the response
        return res.status(200).json({
            success:true,
            messgae:'Appointment created successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Failed to book appointment. Please try again.'
        });
    }
}