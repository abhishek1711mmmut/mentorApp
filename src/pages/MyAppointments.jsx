import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchUserAppointments } from '../services/operations/appointmentAPI'

const MyAppointments = () => {
  const {token}=useSelector((state)=>state.auth)
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    const fetchAppointments=async()=>{
        const result=await fetchUserAppointments(token);
        if(result){
          setAppointments(result);
        }
    }
    fetchAppointments();
},[])

  const appointmentList=
      <table>
        <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Mentor Name</th>
          <th>User Name</th>
        </tr>
        </thead>
        <tbody>
          {
            appointments.map((appointment, index)=>(
              <tr key={index}>
                <td>
                  {appointment._id}
                </td>
                <td>
                  {appointment.mentor.firstName} {appointment.mentor.lastName}
                </td>
                <td>
                  {appointment.student.firstName} {appointment.student.lastName}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

  return (
    <div>
      <h1>My Appointments</h1>
      <div>
        {
          appointments.length > 0 ? appointmentList : <div>No appointment scheduled</div>
        }
      </div>
    </div>
  )
}

export default MyAppointments