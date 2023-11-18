import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { signUp } from "../services/operations/authAPI"

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const location=useLocation();
  const accountType=location.pathname.split('/').at(-1);

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }

    // const signupData = {
    //   ...formData,
    //   accountType,
    // }

    // console.log(signupData)

    // dispatch(signUp(firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    //   accountType,
    //   navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <div className='flex justify-center items-center h-[70vh]'>
        <div className='border-pink-500 border-4 w-fit p-4 rounded-2xl'>
          <h1 className='text-center text-pink-500 text-2xl font-bold mb-3'>Signup Page</h1>
          <form onSubmit={handleOnSubmit} className='flex flex-col gap-y-3'>
            <div className="flex justify-between gap-x-3">
              <label htmlFor="firstName">
                <p className='text-lg pl-2 pb-1'>
                  First Name <sup className="text-red-800">*</sup>
                </p>
                <input 
                  required
                  type="text" 
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={handleOnChange}
                  placeholder="Enter first name"
                  className='p-3 rounded-2xl outline-none bg-gray-200'
                />
              </label>
              <label htmlFor="lastName">
                <p className='text-lg pl-2 pb-1'>
                  Last Name <sup className="text-red-800">*</sup>
                </p>
                <input 
                  required
                  type="text" 
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleOnChange}
                  placeholder="Enter last name"
                  className='p-3 rounded-2xl outline-none bg-gray-200'
                />
              </label>
            </div>
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
                        className='p-3 rounded-2xl outline-none bg-gray-200 w-full'
                    />
            </label>
            <div className="flex justify-between gap-x-3">
              <label htmlFor="password">
                      <p className='text-lg pl-2 pb-1'>Create Password<sup className="text-red-800">*</sup></p>
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
              <label htmlFor="confirmPassword">
                      <p className='text-lg pl-2 pb-1'>Confirm Password<sup className="text-red-800">*</sup></p>
                      <input 
                          required
                          type={showConfirmPassword ? "text" :"password"} 
                          name="confirmPassword" 
                          id="confirmPassword" 
                          value={confirmPassword}
                          onChange={handleOnChange}    
                          placeholder='Confirm password'
                          className='p-3 rounded-2xl outline-none bg-gray-200 relative'
                      />
                      <span
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          className="absolute translate-x-[-150%] translate-y-[50%] cursor-pointer"
                      >
                          {showConfirmPassword ? (
                              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                          ) : (
                              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                          )}
                      </span>
              </label>
            </div>
            <button type="submit"
              className='px-3 py-2 text-white bg-pink-500 rounded-2xl hover:scale-90 transition-all duration-200 hover:bg-white hover:text-pink-500 border-pink-500 border-2 hover:font-semibold'
            >
              Create Account
            </button>
          </form>
        </div>
    </div>
  )
}

export default Signup