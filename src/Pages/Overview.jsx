import React from 'react'
import "../assets/Styles/Overview.css"
import { IoSearchSharp } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import my from"../assets/Images/my.jpg";
function Overview() {
  return (
   <div className='over-view-container'>
<nav className='over-view-navbar'>


<div className="message-date">
<h4>Good Morning!!!</h4>
<p>I'ts Monday  10 May 2025</p>
</div>

<div className="overview-search-bar">

<input placeholder='Search'></input>
<IoSearchSharp className='search-icon' />
</div>


<div className="notify-profile">
<VscBellDot className='bell-icon' />
<img src={my}></img>

</div>






</nav>



   </div>
  )
}

export default Overview