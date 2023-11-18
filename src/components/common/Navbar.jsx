import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {token}=useSelector((state)=>state.auth);
    const BtnPart=<div className='flex justify-center items-center gap-x-5'>
                        <button className='text-xl bg-blue-500 text-white px-4 py-2 rounded-lg group relative flex cursor-pointer items-center gap-1'>
                            Login
                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex flex-col w-[100px] translate-x-[-50%] translate-y-[3em] rounded-lg p-2 bg-sky-400 text-white opacity-0 delay-150 duration-150 group-hover:visible group-hover:translate-y-[2.4em] group-hover:opacity-100 lg:w-[150px] text-sm'>
                                <div className='absolute left-[35%] top-0 translate-x-[80%] translate-y-[-40%] -z-10 h-6 w-6 rotate-45 select-none rounded bg-sky-400'>{/*upper-half-triangle*/}</div>
                                <Link to='/login/student' className='rounded-lg bg-transparent py-2 pl-2 hover:bg-sky-300'>For Student</Link>
                                <Link to='/login/company' className='rounded-lg bg-transparent py-2 pl-2 hover:bg-sky-300'>For Company</Link>
                            </div>
                        </button>
                        <button className='text-xl bg-blue-500 text-white px-4 py-2 rounded-lg group relative flex cursor-pointer items-center gap-1'>
                            Signup
                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex flex-col w-[100px] translate-x-[-50%] translate-y-[3em] rounded-lg p-2 bg-sky-400 text-white opacity-0 delay-150 duration-150 group-hover:visible group-hover:translate-y-[2.4em] group-hover:opacity-100 lg:w-[150px] text-sm'>
                                <div className='absolute left-[35%] top-0 translate-x-[80%] translate-y-[-40%] -z-10 h-6 w-6 rotate-45 select-none rounded bg-sky-400'>{/*upper-half-triangle*/}</div>
                                <Link to='/signup/student' className='rounded-lg bg-transparent py-2 pl-2 hover:bg-sky-300'>For Student</Link>
                                <Link to='/signup/company' className='rounded-lg bg-transparent py-2 pl-2 hover:bg-sky-300'>For Company</Link>
                            </div>
                        </button>
                    </div>

  return (
    <div className='p-3'>
        <div className='flex w-11/12 justify-between items-center mx-auto pb-3 border-b-2 border-slate-300'>
            <Link to='/'>
                <h1 className='font-bold text-xl text-pink-600 border-4 p-2 rounded-xl border-pink-600'>Brand_Logo</h1>
            </Link>
            <ul className='flex justify-center items-center gap-x-10 translate-y-[15%]'>
                {
                    NavbarLinks.map((link, index)=>(
                        <li key={index} className='text-xl hover:text-blue-500 hover:border-b-2 border-blue-500 pb-2 hover:cursor-pointer'>{link.title}</li>
                    ))
                }
            </ul>

            {token===null && (BtnPart)}
        </div>
    </div>
  )
}

export default Navbar