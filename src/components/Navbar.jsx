import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        
const response = await api.get("/");  


        console.log(response.data);
      } catch (err) {
        console.log("API not reachable");
      }
    };
    fetchAPI();
  }, []);

  return (
    <nav
      className={`bg-white text-black w-full sticky top-0 z-[10] transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-red-700 dancing-script-topic">
            Gensler
          </h1>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {["Research & Insights", "Expertise", "Projects", "People", "Offices", "About", "Careers", "Contact Us"].map(
            (item, index) => (
              <li
                key={index}
                className="hover:text-amber-400 transition-all duration-300"
              >
                <a href="#">{item}</a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-inner"
        >
          <ul className="flex flex-col items-center py-4 gap-4">
            {["Research & Insights", "Expertise", "Projects", "People", "Offices", "About", "Careers", "Contact Us"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-amber-400 transition-all duration-300"
                >
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
