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
          {/* Public homepage - visible to everyone */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <ProjectCards />
                <Cards /> {/* 👈 moved here so it shows publicly */}
                <DialogueSection />
                <FooterSection />
              </>
            }
          />

          {/* Signup and Login routes */}
          <Route path="/create-user" element={<SignUp />} />
          <Route path="/login-user" element={<Login />} />

          {/* Protected route for internal pages */}
          <Route
            path="/private-cards"
            element={
              <ProtectedRoute>
                <Cards />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
