import React , {useEffect , useState} from 'react'
import style from './onecoach.module.css'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { instanceAxios } from '../Axios/instance';


function OneCoach({data}) {
  const user = useSelector((state) => state.auth);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if(clicked){
      const coash_id= localStorage.setItem("coash_id",JSON.stringify(data._id))
      instanceAxios.post(`http://localhost:3000/coach/subscribeToCoach`,{userId:user._id,coachId:data._id}).then((response) => {
        console.log(response.data);
      }).catch(err=>{
        console.log(err)
      });
    }
  },[clicked] );

  return (
<>
<div className={style.div1} style={{backgroundImage:`url(${data.imageFile})`}}>
  <div className={style.div2}>
    <div className={style.div3}>
      <div className={style.div4}>
        <div className={style.div5}>{data.name}</div>

      </div>
      <div className={style.div7}>
    <Link className={`${style.btn} ${style.btn__doar}`}  onClick={() => setClicked(true)}>Subscribe</Link>
      </div>
    </div>
  </div>
</div>
    <div className={style.flip_card_back}>
    <h2 className={style.flip_card_back_h2}>{data.name}</h2>
    <p className={style.flip_card_back_p}>{data.description}</p>
  </div>
</>
  )
}

export default OneCoach