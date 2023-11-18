const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

// signup
exports.signup=async (req, res)=>{
    try{
        // data fetch from request ki body
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
        }=req.body;
        // validate krlo
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(403).json({
                success:false,
                message:'All fields are required'
            })
        }
        // Check if password and confirm password match
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:'Password and Confirm Password do not match. Please try again.'
            })
        }

        // check user already exist or not
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists. Please sign in to continue.'
            })
        }

        // Hash password
        const hashedPassword=await bcrypt.hash(password, 10);

        
        const experience=accountType==='company' ? "2+ years" : null
        const specialisation=accountType==='company' ? "All subject" : null

        const user=await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            accountType,
            experience,
            specialisation
        })

        // return res
        return res.status(200).json({
            success:true,
            message:'User is registered successfully',
            user
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered. Please try again.'
        })
    }
}

// login
exports.login=async(req, res)=>{
    try{
        // get data from req body
        const {email, password}=req.body;
        // validation data
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please Fill up All the Required Fields'
            });
        }
        // user check exist or not
        const user=await User.findOne({email});
        // If user not found with provided email
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User is not Registered with Us. Please SignUp to Continue'
            });
        }
        // generate JWT, after password matching
        if(await bcrypt.compare(password, user.password)){
            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType
            }
            const token=jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:'24h'
            });
            // Save token to user document in database
            user.token=token;
            user.password=undefined;

            // create cookie and send response
            const options = {
				expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
            res.cookie('token', token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Login Success'
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:'Password is incorrect'
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure, please try again'
        })
    }
};