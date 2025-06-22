import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Greeting from "./components/Greeting";
import LandingPages from "./components/LandingPages";
import JobListForm from "./components/JobListForm";
import CreateAccount from "./components/CreateAccount";
import AddJobListForm from "./components/AddJobListForm";
import LoginForm from "./components/LoginForm";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/JobListForm" element={<JobListForm/>} />
        <Route path="/AddJobListForm" element={<AddJobListForm/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
