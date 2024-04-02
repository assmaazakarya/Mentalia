// import React from "react";
// import Side from "../Sider/Side";
// import Content from "../content/Content";
// import style from './Dashboard.module.css';
// function Dashboard() {
//   return (
//     <React.Fragment>
//       <div className={style.dashboard}>
//         <Side className={style.side} />
//         <Content className={style.content} />
//       </div>
//     </React.Fragment>
//   );
// }

// export default Dashboard;
import React ,{useEffect} from "react";
import Side from "../Sider/Side";
import Content from "../content/Content";
import style from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(window.location.href==='http://localhost:5174/userDashboard'|| window.location.href === 'http://localhost:5173/userDashboard'){
        navigate('/userDashboard/schedules')
      } else if(window.location.href==='http://localhost:5174/userDashboard/coach'|| window.location.href === 'http://localhost:5173/userDashboard/coach'){
        navigate('/userDashboard/coach')
      }else if(window.location.href==='http://localhost:5174/userDashboard/settings'|| window.location.href === 'http://localhost:5173/userDashboard/settings'){
        navigate('/userDashboard/settings')
      }
    },10);
    return () => clearTimeout(timeoutId);
  }, [navigate])
  return (
    <React.Fragment>
      <div className={style.dashboard}>
        <Side className={style.side} />
        <Content className={style.content} />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;