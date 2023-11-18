const User=require('../models/User');

// get all user details
exports.getUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id);
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// get all mentors details
exports.getAllMentors=async(req, res)=>{
	try {
		const allMentors=await User.find({accountType:'company'})

		// return all mentor details
		res.status(200).json({
			success:true,
			data:allMentors
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message,
			message:"Failed to retrieve all mentors details"
		});
	}
}