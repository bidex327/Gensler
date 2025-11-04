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
          {/* Protected homepage */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
                <ProjectCards />
                <Cards />
                <DialogueSection />
                <FooterSection />
              </ProtectedRoute>
            }
          />

          {/* Signup and Login remain public */}
          <Route path="/create-user" element={<SignUp />} />
          <Route path="/login-user" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
