import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const menuRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect (()=>{
    const fetchAPI = async () =>{
      const response = await axios.get ("https://nodejsy-app.vercel.app/")
      console.log (response.data)
    }
    fetchAPI();
  }, [])

  return (
    <nav className="bg-white text-black w-full  p-auto mt-0 sticky top-0 z-[10] ">
      <div className="max-w-[1200px] mx-auto mt-2 p-8  flex flex-row justify-between">
        <Link to="/">
          <div className="text-2x1 font-bold z-10 text-red-700 text-x1 " >
            <h1 className="text-3xl dancing-script-topic inline">Gensler</h1>
          </div>
        </Link>
          <button 
          className="block md:hidden text-white" 
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div >
          <ul className="flex flex-row items-center gap-4 justify-between pr-50 ">
            <li className=" hover:text-amber-200 transition-all duration-300" >
              <a href="#">Research & Insights</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">Expertise</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">Projects</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">People</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">Offices</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">About</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300">
              <a href="#">Careers</a>
            </li>
            <li className=" hover:text-amber-200 transition-all duration-300 ">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
