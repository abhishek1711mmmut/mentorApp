import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { login } from '../services/operations/authAPI'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(email, password, navigate))
        // navigate('/dashboard/my-appointments');
    }

  return (
    <div className='flex justify-center items-center h-[70vh]'>
        <div className='border-pink-500 border-4 w-fit p-4 rounded-2xl'>
            <h1 className='text-center text-pink-500 text-2xl font-bold mb-3'>Login Page</h1>
            <form onSubmit={handleOnSubmit} className='flex flex-col gap-y-3'>
                <label htmlFor="email">
                    <p className='text-lg pl-2 pb-1'>Email Address <sup className="text-red-800">*</sup></p>
                    <input 
                        required
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={handleOnChange}    
                        placeholder='Enter email address'
                        className='p-3 rounded-2xl outline-none bg-gray-200'
                    />
                </label>
                <label htmlFor="password">
                    <p className='text-lg pl-2 pb-1'>Password<sup className="text-red-800">*</sup></p>
                    <input 
                        required
                        type={showPassword ? "text" :"password"} 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={handleOnChange}    
                        placeholder='Enter password'
                        className='p-3 rounded-2xl outline-none bg-gray-200 relative'
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute translate-x-[-150%] translate-y-[50%] cursor-pointer"
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
                <button
                    type="submit"
                    className='px-3 py-2 text-white bg-pink-500 rounded-2xl hover:scale-90 transition-all duration-200 hover:bg-white hover:text-pink-500 border-pink-500 border-2 hover:font-semibold'
                >
                    Sign In
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login