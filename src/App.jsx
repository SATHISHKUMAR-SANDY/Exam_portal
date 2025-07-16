import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Overview from "./Pages/Overview";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register></Register>}></Route>
          <Route path="/reg" element={<Register></Register>}></Route>
          <Route path="/log" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route index element={<Overview></Overview>}></Route>

            <Route path="overview" element={<Overview></Overview>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
