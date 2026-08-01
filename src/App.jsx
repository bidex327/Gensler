import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

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
        <Home />
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