// Import the required modules
const express = require("express")
const router = express.Router()

const {auth}=require('../middlewares/auth')

const {
    getUserAppointments, bookAppointment
}=require('../controllers/Appointment')

router.get('/getAppointment', auth, getUserAppointments);
router.post('/book-appointment', auth, bookAppointment)

module.exports=router