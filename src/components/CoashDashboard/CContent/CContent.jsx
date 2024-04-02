import React from "react";
import { Route, Routes ,Navigate  } from "react-router-dom";
import CSchedule from "../CSchedule/CScedule";
import CUsers from '../CUsers/CUsere';
// import style from "./Content.module.css"

function CContent() {
  return (
    <>
    <div>
   {/* <Header className={style.head}/> */}
    <Routes>
      <Route path="/" element={<Navigate to="/coashDashboard"/>} />
      <Route path="/user_schedule" element={<CSchedule/>} />
      <Route path="/users" element={<CUsers/>} />
    </Routes>
    </div>
    </>
  );
}

export default CContent;