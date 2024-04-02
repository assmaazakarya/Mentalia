import React ,{useEffect,useState} from 'react'
import style from './coaches.module.css'
import img from '../assets/sporty-man-removebg1.png'
import smile from '../assets/smile.jpg'
import eat from '../assets/ready-eat.jpg'
import headphone from '../assets/headphone.jpg'
import Navbar from './Navbar'
import OneCoach from './OneCoach'
import { instanceAxios } from '../Axios/instance';

function Coaches() {
   const [coaches , setCoaches]=useState([])
   useEffect(() => {
        instanceAxios.get(`http://localhost:3000/coach/getAllCoaches`).then((response) => {
          setCoaches([...response.data]);
        });
    },[]);
  return (
  <>
   <section className={style.cont}>
   <Navbar />
   <div className={style.hero_sec}>
    <div className={style.hero_sec_right}>
    
       <h1 className={style.hero_sec_right_h1}>We Are Responsible <br />
       for Build Your  <span className={style.hero_sec_right_span}> BODY</span></h1>
       <div className={style.color}></div>   
       <p className={style.hero_sec_right_p}>
       Your Body is a Work of Art . with the help of team of experts  trainers <br />
        by daily work out and stay active at home ,  Your coach will stay <br /> up to date with you 
       </p>
       <a href="#" className={style.button}>Explore more </a>
    </div>
    <div className={style.hero_sec_left}>
       <div className={style.hero_sec_left_cont}>
        <img src={img} alt=""  className={style.hero_sec_left_cont_img}/>
       </div>
    </div>
    </div>
  </section>
   <section className={style.two_cards}>
   <figure className={style.figure}>
    <img src={smile} className={style.smiling} alt=""/>
    <figcaption  className={style.figcaption}>Build</figcaption>
</figure>
<figure  className={style.figure}>
    <img src={eat} className={style.smiling} alt=""/>
    <figcaption className={style.figcaption}>Your</figcaption>
</figure>
<figure  className={style.figure}>
    <img src={headphone}  className={style.smiling} alt=""/>
    <figcaption className={style.figcaption}>Body</figcaption>
</figure>
   </section>
   <section className={style.coaches}>
   <div className={style.coaches_div_header}>
            <h2  className={style.coaches_div_header_h2}>Explore Our Expert Trainers </h2>
            <p  className={style.coaches_div_header_p}>Subscribe Now</p>
         </div>
      <div className={style.coaches_div}>

      {coaches.map((coach) => {
                    return (
                     <OneCoach key={coach._id} data={coach}/>
                    );
                  })}
      </div>

   </section>


   <section className={style.sec6}>
        <div className={style.secfooter}>
          <div className={`${style.up} ${style.container}`}>
            <div className={style.secfooterleft}>
              <h4 className={style.secfooterlefth4}>Healty</h4>
              <p className={style.secfooterleftp}>
                We have a mission to <br />
                make people around the <br />
                world better throught a <br />
                healthy life style
              </p>
            </div>
            <div className={style.secfooterright}>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>About</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Support</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp} >News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Movment</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Company</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
            </div>
          </div>
          <div className={style.last}>
            <div className={style.small}>
              <small>@2024.Healty All rights reserved</small>
            </div>
            <div className={style.policy}>
              <small>
                Terms &amp; Arguments <span> </span>
                Privacy Policy
              </small>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Coaches