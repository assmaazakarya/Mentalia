import React from 'react';
import './App.css'
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
// import CheckoutSuccess from './components/CheckoutSuccess'
// import Cart from './components/Cart'
import Meals from './components/Meals'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Checking from './components/Checking'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Cancel from './components/Cancel'
import Landing from './components/Landing'
import SStepper from './components/Stepper'
import Dashboard from './components/dashboard/Dashboard'
import Schedules from './components/schedules/Schedules'
import Coach from './components/coach/Coach'
import Setting from './components/Settings/Setting'
import Coaches from './components/Coaches'
import Details from './components/details/Details'
import ContactUs from './components/contactUs/contact';
import Loader from "./components/Loader/Loader"
import CoachDayDetails from './components/coach/CoachDayDetails'
import CDashboard from'./components/CoashDashboard/CDashboard/CDashboard'
import CSchedule from "./components/CoashDashboard/CSchedule/CScedule";
import CUsers from './components/CoashDashboard/CUsers/CUsere';

function App() {    

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/stepper' element={<SStepper />} />
          <Route path='/cart' element={<Navbar />} />
          <Route path='/checkout-success' element={<Checking />} />
          <Route path='/cancel' element= {<Cancel/>}/>
          <Route path='/meals' element={<Meals />} />
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/coaches' element={<Coaches />} />
          <Route path='/coashDashboard' element={<CDashboard/>}>
          <Route path='user_schedule' element={< CSchedule />}/>
          <Route path='users' element={<CUsers/>}/>
          </Route>
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/userDashboard' element={< Dashboard />}>
          <Route path='schedules' element={<Schedules />}/>
          <Route path='schedules/details/:id' element={<Details />}/>
          <Route path='coach' element={<Coach />} />
          <Route path='coach/CoachDayDetails/:id' element={<CoachDayDetails />}/>
          <Route path='settings' element={<Setting />} />
          </Route>
          <Route path='/not-found' element={<Notfound />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
