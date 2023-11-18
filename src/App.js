import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import OpenRoute from './components/core/auth/OpenRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/core/auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import MyAppointments from './pages/MyAppointments';
import { ACCOUNT_TYPE } from './utils/constants';
import BookAppointment from './components/core/Dashboard/BookAppointment';
import CalendlyKey from './components/core/Dashboard/CalendlyKey';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserDetails } from './services/operations/profileApi';
import Error from './pages/Error';
import { useLocation } from "react-router-dom"


function App() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=uselocation()
  const {user}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(localStorage.getItem("token")){
      const token=JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
  },[])

  useEffect(()=>{
    console.log(location.pathname)
  },[location.pathname])

  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route
            path='signup/student'
            element={
              <OpenRoute>
                <Signup/>
              </OpenRoute>
            }
          />

          <Route
            path='signup/company'
            element={
              <OpenRoute>
                <Signup/>
              </OpenRoute>
            }
          />

          <Route
            path='login/student'
            element={
              <OpenRoute>
                <Login/>
              </OpenRoute>
            }
          />

          <Route
            path='login/company'
            element={
              <OpenRoute>
                <Login/>
              </OpenRoute>
            }
          />

          <Route
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }>
            <Route path='dashboard/my-appointments' element={<MyAppointments/>}/>
            {
              user?.accountType===ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path='dashboard/book-appointment' element={<BookAppointment/>}/>
                </>
              )
            }

            {
              user?.accountType===ACCOUNT_TYPE.COMPANY && (
                <>
                  <Route path='dashboard/set-calendly-key' element={<CalendlyKey/>}/>
                </>
              )
            }
          </Route>

          {/* error 404 page */}
          <Route path="*" element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
