import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Overview from "./Pages/Overview";
import Designing from "./Pages/Designing";
import Exam from "./Pages/Exam";
import Result from "./Pages/result";
import Question1 from "./Pages/Question1";
import Question2 from "./Pages/Question2";
import UploadQuestionPaper from "./Pages/UploadQuestionPaper";
import Thanks from "./Pages/Thanks";
import OfflineTrainees from "./Pages/OfflineTrainees";
import OnlineTrainees from "./Pages/OnlineTrainees";
import TraineeProfile from "./Pages/TraineeProfile";
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
            <Route path="design" element={<Designing></Designing>}></Route>
            <Route path="exam" element={<Exam></Exam>}></Route>
            <Route path="result" element={<Result></Result>}></Route>
            <Route path="Question1" element={<Question1></Question1>} />
            <Route path="Question2" element={<Question2></Question2>} />
            <Route
              path="uploadpaper"
              element={<UploadQuestionPaper></UploadQuestionPaper>}
            />
            <Route path="thanks" element={<Thanks></Thanks>}></Route>
            <Route
              path="offlinetrainees"
              element={<OfflineTrainees></OfflineTrainees>}
            />
            <Route
              path="onlinetrainees"
              element={<OnlineTrainees></OnlineTrainees>}
            />
             <Route path="traineeprofile" element={<TraineeProfile></TraineeProfile>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
