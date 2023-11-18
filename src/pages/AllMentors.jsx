import React, { useEffect, useState } from 'react'
import { profileEndpoints } from '../services/apis';
import { useNavigate } from 'react-router-dom';
import { bookAppointment } from '../services/operations/appointmentAPI';
import { useSelector } from 'react-redux';
import { apiConnector } from '../services/apiconnector';

const AllMentors = () => {

    const [allMentors, setAllMentors] = useState([])

    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    

    useEffect(()=>{
        const getAllMentors=async()=>{
            // const res=await apiConnector("GET", profileEndpoints.GET_ALL_MENTOR_API, null, {Authorization: `Bearer ${token}`});
            // console.log("GET ALL MENTORS API RESPONSE....", res)
            // setAllMentors(res.data.data)
        }
        getAllMentors();
    },[])

  return (
    <div>
        <div>
        {
            allMentors ? (allMentors.map((mentor, index)=>(
                <div key={index} >
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${mentor.firstName} ${mentor.lastName}`} alt="" />
                    <h1>{mentor.firstName} {mentor.lastName}</h1>
                    <p>{mentor.specialisation}</p>
                    <p>{mentor.experience}</p>
                    <button onClick={()=>{
                        bookAppointment(mentor._id,  token, navigate)
                    }}>
                        Book Appointment
                    </button>
                </div>
            ))) : (<div>No mentor found !</div>)
        }
        </div>
    </div>
  )
}

export default AllMentors