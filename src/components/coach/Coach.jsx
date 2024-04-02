import React, { useEffect, useState } from "react";
import stylo from "./Coach.module.css";
import { instanceAxios } from "../../Axios/instance";
import CoachDay from "./CoachDay";
import { useSelector } from "react-redux";

function Coach() {
  const [days,setdays] = useState([])
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    instanceAxios
      .get(
        `http://localhost:3000/coach/getUserSchedule/${user._id}`
      )
      .then((response) => {
        setdays(response.data)
      });
  }, []);
  return (
    <>
      <div className={stylo.mainConte}>
        {days.length>0 &&
        days.map((day)=>{
          return(
          <CoachDay data={day}/>
          )
        })
        }

      </div>
    </>
  );
}

export default Coach;
