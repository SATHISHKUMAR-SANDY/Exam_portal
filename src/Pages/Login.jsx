import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/Log.css";
import Regbackground from "../assets/Images/Login.png";
export default function Login() {
  const navi = useNavigate();
  const [logdata, setlogdata] = useState({
    email: "",
    password: "",
  });
  const [exit_data, setexitdata] = useState({
    ex_email: "",
    ex_password: "",
  });
  const [err, seterr] = useState({
    email_err: "",
    password_err: "",
  });
  const handelinput = (e) => {
    const { name, value } = e.target;
    setlogdata((current) => {
      return { ...current, [name]: value };
    });

    seterr((current) => {
      return {
        ...current,
        [`${name}_err`]: "",
      };
    });
  };

  const Formvalidate = () => {
    const newerr = {};
    if (logdata.email.trim() === "") {
      newerr.email_err = "Email is a required field";
    } else if (logdata.email.trim() !== exit_data.ex_email.trim()) {
      newerr.email_err = "Email is not matched";
    }

    if (logdata.password === "") {
      newerr.password_err = "Password is required";
    } else if (logdata.password !== exit_data.ex_password) {
      newerr.password_err = "Password is not matched";
    }
    seterr(newerr);
    return Object.keys(newerr).length == 0;
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    if (Formvalidate()) {
      alert("Login SuccessFully");
      navi("/home");
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("User"));

    if (saved) {
      setexitdata({
        ex_email: saved.email,
        ex_password: saved.password,
      });
    }
  }, []);
  return (
    <>
      <div className="log-main-container" style={{ backgroundImage: `url(${Regbackground})` }}>
        <form onSubmit={handelsubmit} className="log-form-container">
          <h1>Login</h1>
          <div className="log-first-input-group">
            <label>Email</label>
            <input
              type={"text"}
              placeholder="Enter Your Name"
              value={logdata.email}
              name="email"
              onChange={handelinput}
            ></input>
            {err.email_err ? (
              <p style={{ color: "red", fontWeight: "700" }}>{err.email_err}</p>
            ) : (
              ""
            )}
          </div>

          <div className="log-second-input-group">
            <label>Password</label>
            <input
              type={"password"}
              placeholder="Enter Your password"
              value={logdata.password}
              name="password"
              onChange={handelinput}
            ></input>
            {err.password_err ? (
              <p style={{ color: "red", fontWeight: "700" }}>
                {err.password_err}
              </p>
            ) : (
              ""
            )}
          </div>
          <button type="submit">Submit</button>
          <p onClick={()=>navi("/reg")} >You Dont Have A account?</p>
        </form>
      </div>
    </>
  );
}
