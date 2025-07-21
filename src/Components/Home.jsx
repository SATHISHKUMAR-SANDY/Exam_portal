import React from "react";
import "../assets/Styles/Home.css";
import logo from "../assets/Images/logo.jpg";
import overview from "../assets/Images/Overview.png"
import Design from "../assets/Images/Design.png"
import dvelopment from "../assets/Images/development.jpg"
import Exam from "../assets/Images/Exam.png"
import result from "../assets/Images/result.png"
import { FaPencilRuler } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { LuSearchCheck } from "react-icons/lu";
import { Outlet, useNavigate } from "react-router-dom";
export default function Home() {
 const  navi = useNavigate()
  return (
    <div className="Home-container">
      <div className="sidebar-main-container">
        <div className="head-logo">
          <img src={logo}></img>
          <p>
            VTS Exam<br></br>Portal
          </p>
        </div>

        <nav className="side-nav">
          <ul className="side-nav-links">
            <li className="nav-item"  onClick={()=>navi("/home")}>
              <img src={overview} className='nav-icon' />
              Overview
            </li>
            <li   className="nav-item" onClick={()=>navi("design")}>
            <FaPencilRuler className="nav-icon" />
              Designing</li>
            <li  className="nav-item">
            <MdDeveloperMode className="nav-icon" />
            Development</li>
            <li  className="nav-item" role="button" onClick={()=>navi("exam")} >
            <CgNotes  />
            Exam</li>
            <li  className="nav-item"  role="button" onClick={()=>navi("result")} >
            <LuSearchCheck className="nav-icon" />
            Result</li>
          </ul>
        </nav>
      </div>

<div className="child-container">
<Outlet></Outlet>
</div>



    </div>
  );
}
