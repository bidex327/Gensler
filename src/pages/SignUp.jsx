import { useState } from "react";
import api from "../Api/instance";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
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
      const response = await api.post("/create-user", formData);
      if (response?.status === 201) {
        const data = response.data;
        const token = data?.token;
        localStorage.setItem("auth-token", token);
        toast.success("Account created");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "fullName", type: "text", label: "Full name" },
    { name: "email", type: "email", label: "Email address" },
    { name: "phoneNumber", type: "tel", label: "Phone number" },
    { name: "password", type: "password", label: "Password" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left panel — brand / editorial side */}
      <div className="relative hidden md:flex md:w-2/5 flex-col justify-between bg-[#1c1c1a] text-[#ede9e3] p-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #ede9e3 0px, #ede9e3 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #ede9e3 0px, #ede9e3 1px, transparent 1px, transparent 64px)",
          }}
        />
        <div className="relative">
          <p className="text-sm tracking-wide text-[#a9987c]">Gensler</p>
        </div>
        <div className="relative max-w-sm">
          <h2 className="font-serif text-4xl leading-tight text-white">
            Spaces are built in stages. So is an account.
          </h2>
          <p className="mt-4 text-sm text-[#c9c3b6] leading-relaxed">
            Create your login to pick up where you left off, on any project,
            from any device.
          </p>
        </div>
        <div className="relative text-xs text-[#8a8375]">
          © {new Date().getFullYear()} Gensler
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-0">
        <div className="w-full max-w-sm">
          <h1 className="font-serif text-3xl text-[#1c1c1a] mb-1">
            Create your account
          </h1>
          <p className="text-sm text-[#6b665c] mb-10">
            Fill in your details to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">
            {fields.map((field) => (
              <div key={field.name} className="relative">
                <label
                  htmlFor={field.name}
                  className="block text-xs uppercase-none tracking-wide text-[#8a8375] mb-1"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-[#d9d5cc] py-2 text-[#1c1c1a] placeholder-[#b3ada0] focus:outline-none focus:border-[#a67c52] transition-colors"
                  placeholder={
                    field.name === "email"
                      ? "you@company.com"
                      : field.name === "phoneNumber"
                      ? "+1 (555) 000-0000"
                      : ""
                  }
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[#1c1c1a] text-white py-3 text-sm tracking-wide hover:bg-[#a67c52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          {loading && (
            <div className="mt-6 flex justify-center">
              <Loader />
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}