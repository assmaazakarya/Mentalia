import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./StyledForm";
import style from './reg.module.css' 

function Login () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <>
        <div class={style.color_change_2x}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.register}>Login</h2>
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
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
        </button>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
      </div>
    </>
  );
}

export default Login;
