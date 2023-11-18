const express = require("express")
const router = express.Router()

const {auth, isMentor}=require('../middlewares/auth')

const {getUserDetails, getAllMentors}=require('../controllers/Profile')

router.get('/getUserDetails', auth, getUserDetails);
router.get('/getAllMentors', auth, getAllMentors)

module.exports=router