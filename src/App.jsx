import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FooterSection from "./components/Footer";
import Slide from "./components/swiper";
import Hero from "./components/Hero";
import Cards from "./components/Cards"
import HeroSection from "./components/HeroSection"
import AnimatedSection from "./components/AnimatedSection"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
  path="/"
  element={
    <ProtectedRoute>
      <>
        <Navbar />
         <Slide />
  <Hero />
  <Cards />
  <HeroSection />
  <AnimatedSection />

        <FooterSection/>
      </>
    </ProtectedRoute>
  }
/>

        <Route path="/create-user" element={<SignUp />} />
        <Route path="/login-user" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;