import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { appointmentsEndpoints } from "../apis"

const {
    GET_ALL_APPOINTMENT_API,
    BOOK_APPOINTMENT_API
}=appointmentsEndpoints

// fetching all appintments under a specific user
export const fetchUserAppointments=async(token)=>{
    let result=[]
    const toastId=toast.loading("Loading...")
    try {
        // const response=await apiConnector(
        //     "GET",
        //     GET_ALL_APPOINTMENT_API,
        //     null,
        //     {
        //         Authorization: `Bearer ${token}`,
        //     }
        // )
        // console.log("USER APPOINTMENT API RESPONSE............", response)
        // if (!response?.data?.success) {
        //     throw new Error("Could Not User Appointment Courses")
        // }
        // result=response?.data?.data
    } catch (error) {
        console.log("USER APPOINTMENT API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const bookAppointment=async(mentorId,  token, navigate)=>{
    const toastId=toast.loading("Loading...");
    try {
        // const appointmentResponse=await apiConnector("POST", BOOK_APPOINTMENT_API, {mentorId}, {Authorization: `Bearer ${token}`})
        // console.log('BOOK APPOINTMENT RESPONSE ......', appointmentResponse)

        // if(!appointmentResponse.data.success){
        //     throw new Error(orderResponse.data.message)
        // }
        toast.success('Appointment Booked')
        navigate('/dashboard/my-appointments')
    } catch (error) {
        console.log('BOOK APPOINTMENT API ERROR.......', error);
        toast.error('Could not book appointment');
    }
    toast.dismiss(toastId)
}