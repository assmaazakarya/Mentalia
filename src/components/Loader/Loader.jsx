import React ,{useEffect} from 'react'
import style from './loader.module.css'
import { useNavigate } from 'react-router-dom';
function Loader() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/userDashboard');
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <>
<div className={style.body}>
<div className={style.loading}>
  <div className={style.logo}/>
 <h1 className={style.h1}> LOADING</h1>
  <div className={`${style.dots} ${style.animate}`}>
    <div className={style.dot} />
    <div className={style.dot} />
    <div className={style.dot} />
    <div className={style.dot} />
    <div className={style.dot} />
  </div>
</div>
</div>


    </>
  )
}

export default Loader