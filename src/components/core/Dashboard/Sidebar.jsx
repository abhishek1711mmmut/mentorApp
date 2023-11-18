import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { VscSignOut } from 'react-icons/vsc'

const Sidebar = () => {
    const {user}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(logout(navigate))
    }

  return (
    <div className='w-[270px] border-r-2 border-black'>
        <div className='flex flex-col'>
            {
                sidebarLinks.map((link)=>{
                if(link?.type && user?.accountType !== link.type) return null;
                return (
                    <Link key={link.id} to={link.path}>{link.name}</Link>
                )
                })
            }
            <button onClick={handleClick}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default Sidebar