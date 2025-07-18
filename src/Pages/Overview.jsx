import React, { useState } from "react";
import { MdGroups } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import "../assets/Styles/Overview.css";
import { IoSearchSharp } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import my from "../assets/Images/my.jpg";
import { FaCloudUploadAlt } from "react-icons/fa";

import Trainee from "../Components/Trainee";
import Questionpaper from "../Components/Questionpaper";
function Overview() {
  const [View, Setview] = useState(false);

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    const uploadedFile = e.target.files[0];
    validateAndSetFile(uploadedFile);
  };

  const validateAndSetFile = (file) => {
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (file && allowedTypes.includes(file.type)) {
      if (file.size <= 10 * 1024 * 1024) {
        setFile(file);
        setError("");
      } else {
        setError("File exceeds 10MB limit.");
      }
    } else {
      setError("Only PDF, DOC, or DOCX files are allowed.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  return (
    <div className="over-view-container">
      <nav className="over-view-navbar">
        <div className="message-date">
          <h4>Good Morning!!!</h4>
          <p>I'ts Monday 10 May 2025</p>
        </div>

        <div className="overview-search-bar">
          <input placeholder="Search"></input>
          <IoSearchSharp className="search-icon" />
        </div>

        <div className="notify-profile">
          <VscBellDot className="bell-icon" />
          <img src={my}></img>
        </div>
      </nav>

      <div className="total-cour-trainee-container">
        <div className="total-trainee">
          <p>
            Total Trainees<br></br>
            <strong>500</strong>{" "}
          </p>

          <MdGroups size={30} className="group-icon" />
        </div>

        <div className="total-trainee t-course">
          <p>
            Active Courses<br></br>
            <strong>15</strong>{" "}
          </p>

          <FaBook size={30} className="group-icon" />
        </div>

        <div className="total-trainee up-course">
          <p>
            Upcoming Courses<br></br>
            <strong>12</strong>{" "}
          </p>
          <IoNewspaperOutline size={30} className="group-icon" />
        </div>
      </div>

<Trainee></Trainee>
<Questionpaper></Questionpaper>


    </div>
  );
}

export default Overview;
