import { useState } from "react";
import api from "../Api/instance";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
// import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
      const response = await api.post("http://localhost:5000/api/create-user", formData);
      console.log(response);
      if (response?.status == 201) {
        const data = await response.data;
        console.log(data);
        const token = data?.token;
        console.log(token);
        localStorage.setItem("auth-token", token);
        toast.success("user created successfully");
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
    <div className="w-full bg-white flex flex-row items-center justify-center">
      <div className="max-w-4xl border border-gray-300">
        <h1>Sign UP</h1>
        <form  onSubmit={handleSubmit}>
          <input
            name="fullName"
            className="w-full p-4 focus:outline-amber-300"
            type="text"
            value={formData.fullName}
            placeholder="Input your fullName"
            onChange={handleChange}
          />

          <input
            name="email"
            className="w-full p-4 focus:outline-amber-300"
            type="email"
            placeholder="Input your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="phoneNumber"
            className="w-full p-2 focus:outline-amber-300"
            type="text"
            placeholder="Input your phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <input
            name="password"
            className="w-full p-4 focus:outline-amber-300"
            type="password"
            placeholder="Input your password"
            value={formData.password}
            onChange={handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        {loading && <Loader />}
      </div>
    </div>
  );
}
