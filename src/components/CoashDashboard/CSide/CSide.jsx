import React , { useState } from "react";
import style from "./CSide.module.css";
import img from "../../../assets/download.png";
import { NavLink } from "react-router-dom";
function CSide() {
  return (
      <div className={style.sidebar}>
        <div className={style.head}>
          <div className={style.userImg}>
            <img src={img} alt="" />
          </div>
          <div className={style.userDetails}>
          </div>
        </div>
        <div className={style.nav}>
          <div className={style.menu}>
            <p className={style.title}>Main</p>
            <ul>
        {/* <li>
                  <NavLink to="user_schedule">
                  <i className="icon ph-bold ph-calendar-blank" />
                  <span className={style.text}>user_schedule</span>
                </NavLink>
              </li> */}
              
              <li>
                <NavLink to="users">
                  <i className="icon ph-bold ph-house-simple" />
                  <span className={style.text}>Subscribers</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={style.menu}>
            <p className={style.title}>Settings</p>
            <ul>
              <li>
                <NavLink to="settings">
                  <i className="icon ph-bold ph-gear" />
                  <span className={style.text}>Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.menu}>
          <p className={style.title}>Account</p>
          <ul>
            <li>
              <NavLink to="/">
              <i class="fa-solid fa-house"></i>
                  <span className={style.text}>Home</span>
                </NavLink>
            </li>
            <li    onClick={() => {
                         dispatch(logoutUser());
                                        nav('/')}}>  
              <a href="#">
                <i className="icon ph-bold ph-sign-out" />
                <span className={style.text}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default CSide;