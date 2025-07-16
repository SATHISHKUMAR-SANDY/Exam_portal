import React from "react";
import "../assets/Styles/Reg.css";
import Regbackground from "../assets/Images/Login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [f_data, setf_data] = useState({
    name: "",
    email: "",
    c_password: "",
    password: "",
  });
  const [err, seterr] = useState({
    name_err: "",
    email_err: "",
    c_password_err: "",
    password_err: "",
  });
  const navi= useNavigate()

  const handelinput = (e) => {
    const { name, value } = e.target;
  
    // Update form data
    setf_data((current) => ({
      ...current,
      [name]: value,
    }));
  
    // Clear error for that specific field
    seterr((current) => ({
      ...current,
      [`${name}_err`]: "", // dynamically remove the error for the field
    }));
  };

  const Formvalidate = () => {
    const newerr = {};
  
    if (f_data.name.trim() === "") {
      newerr.name_err = "Name field is required";
    }
  
    if (f_data.email.trim() === "") {
      newerr.email_err = "Email field is required";
    } else if (!f_data.email.includes("@")) {
      newerr.email_err = "Enter a valid email address";
    }
  
    if (f_data.password.trim() === "") {
      newerr.password_err = "Password field is required";
    } else if (f_data.password.length < 5) {
      newerr.password_err = "Password must be at least 5 characters";
    }
  
    if (f_data.c_password.trim() === "") {
      newerr.c_password_err = "Confirm password is required";
    } else if (f_data.password !== f_data.c_password) {
      newerr.c_password_err = "Passwords do not match";
    }
  
    seterr(newerr);

      
   return Object.keys(newerr).length==0
  };
  
  const handelSubmit = (e) => {
    e.preventDefault();
    if(Formvalidate()){
        localStorage.setItem("User",JSON.stringify(f_data))
        alert("Form Submitted Succes Fully")
        navi("/log")
    }

  };

  return (
    <div
      className="reg-main-container"
      style={{ backgroundImage: `url(${Regbackground})` }}
    >
      <form onSubmit={handelSubmit} className="reg-form-container">
        <h1>Register</h1>

        <div className="reg-first-input-group">
          <label>Name</label>
          <input
            type={"text"}
            placeholder="Enter Your Name"
            value={f_data.name}
            name="name"
            onChange={handelinput}
          ></input>
          {err.name_err ? <p style={{color:"red",fontWeight:"700"}}>{err.name_err}</p>:""}
        </div>

        <div className="reg-second-input-group">
          <label>Email</label>
          <input
            type={"email"}
            placeholder="Enter Your Email"
            value={f_data.email}
            name="email"
            onChange={handelinput}
          ></input>
           {err.email_err ? <p style={{color:"red",fontWeight:"700"}}>{err.email_err}</p>:""}
        </div>

        <div className="reg-third-input-group">
          <label>Password</label>
          <input
            type={"password"}
            placeholder="Enter Your Password"
            value={f_data.password}
            name="password"
            onChange={handelinput}
          ></input>
           {err.password_err ? <p style={{color:"red",fontWeight:"700"}}>{err.password_err}</p>:""}
        </div>

        <div className="reg-fourth-input-group">
          <label>Confirm Password</label>
          <input
            type={"password"}
            placeholder="Re-enter your Password"
            value={f_data.c_password}
            onChange={handelinput}
            name="c_password"
          ></input>
           {err.c_password_err ? <p style={{color:"red",fontWeight:"700"}}>{err.c_password_err}</p>:""}
        </div>
        <button type="submit">Register</button>
        <p role={"button"} onClick={()=>navi("/log")}>Alredy Have a Account?</p>
      </form>
    </div>
  );
}
