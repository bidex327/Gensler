import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FooterSection from "./components/Footer";
import Slide from "./components/swiper";
import Hero from "./components/Hero";
import Cards from "./components/cards";
import HeroSection from "./components/HeroSection";
import AnimatedSection from "./components/AnimatedSection";
import ProjectCards from "./components/ProjectCard";
import DialogueSection from "./components/DialogueSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <>
                <div id="home" />
                <Navbar />
                <Slide />
                <Hero />
                <Cards />
                <HeroSection />
                <AnimatedSection />
                <ProjectCards />
                <DialogueSection />
                <FooterSection />
              </>
            // </ProtectedRoute>
          }
        />

        <Route path="/create-user" element={<SignUp />} />
        <Route path="/login-user" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;