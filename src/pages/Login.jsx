import { useState } from "react";
import api from "../Api/instance";

import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const buttonText = loading ? "Logging in..." : "Login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/login-user", formData);

      if (response?.status === 200) {
        const data = response.data;
        const token = data?.token;

        localStorage.setItem("auth-token", token);
        toast.success("Login successful");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/30">
      

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
        <h3 className="text-xl font-semibold mb-5">Sign in to continue</h3>

        <input
          name="email"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Input your email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="password"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Input your password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition"
        >
          {buttonText}
        </button>

        <p className="text-xl font-medium mb-4 text-center">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-blue-400"
            onClick={() => navigate("/create-user")}
          >
            Sign up
          </button>
        </p>
      </form>

      {loading && <Loader />}
      <ToastContainer />
    </div>
  );
}
