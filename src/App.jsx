// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Cards from "./components/cards";

import ProjectCards from "./components/ProjectCard";
import DialogueSection from "./components/DialogueSection";
import FooterSection from "./components/FooterSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
                <ProjectCards/>
                <DialogueSection/>
                <FooterSection/>
         
              </ProtectedRoute>
            }
          />

          <Route path="/create-user" element={<SignUp />} />
          <Route path="/login-user" element={<Login />} />
          <Route path="/cards" element={<Cards/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
