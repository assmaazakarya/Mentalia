import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import { StyledForm } from "./StyledForm";
import style from './reg.module.css'

function Register  () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/login");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
  };
  return (
    <>

      <div class={style.color_change_2x}>
   
        <form onSubmit={handleSubmit} className={style.form} >
        <h2 className={style.register}>Register</h2>
        <input
        className={style.inp}
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
        className={style.inp}
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
        className={style.inp}
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className={style.btn}>
          {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
  <div className={style.divs}>
  <input type="radio" />
      <label for="html">Coach</label><br></br>
      <input type="radio" id="css" name="fav_language" value="CSS"></input>
      <label for="css">Client</label><br></br>
  </div>
      </form>
        </div>
  
    </>
  );
}

export default Register;

