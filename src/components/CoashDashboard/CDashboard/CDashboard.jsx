import React ,{useEffect} from 'react'
import style from './CDashboard.module.css';
import CSide from '../CSide/CSide'
import CContent from '../CContent/CContent';
import CSchedule from "../CSchedule/CScedule";
import { Route, Routes ,Navigate  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CUsers from '../CUsers/CUsere';

function CDashboard() {


  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(window.location.href==='http://localhost:5173/coashDashboard'||window.location.href==='http://localhost:5174/coashDashboard'){
        navigate('/coashDashboard/users')
      } 
    },10);
    return () => clearTimeout(timeoutId);
  }, [navigate])

  return (
    <>
        <div className={style.Dashboard}>
        <CSide className={style.side} />
        {/* <CContent/> */}
        <div>
        <Routes>
      <Route path="/coashDashboard" element={<Navigate to="/user_schedule"/>} />
      <Route path="/user_schedule" element={<CSchedule/>} />
      <Route path="/users" element={<CUsers/>} />
    </Routes>
        </div>
      </div>
    </>
  )
}

export default CDashboard






