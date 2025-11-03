import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Cards from "./components/cards";
import ProjectCards from "./components/ProjectCard";
import DialogueSection from "./components/DialogueSection";
import FooterSection from "./components/FooterSection";

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectCards />
      <DialogueSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public homepage */}
        <Route path="/" element={<Layout />} />

        {/* ✅ Public routes */}
        <Route path="/create-user" element={<SignUp />} />
        <Route path="/login-user" element={<Login />} />

        {/* ✅ Protected route(s) */}
        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <Cards />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
