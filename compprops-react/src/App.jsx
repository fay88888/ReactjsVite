import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Greeting from "./components/Greeting";
import LandingPages from "./components/LandingPages";
import JobListForm from "./components/JobListForm";
import LoginForm from "./components/LoginForm";
import AddJobListForm from "./components/AddJobListForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages/>} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/JobListForm" element={<JobListForm />} />
        <Route path="/AddJobListForm" element={<AddJobListForm />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
