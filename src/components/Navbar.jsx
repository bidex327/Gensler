import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Swiper", to: "swiper" },
    { name: "Hero", to: "hero" },
    { name: "Cards", to: "cards" },
    { name: "Hero Section", to: "hero-section" },
    { name: "Animated", to: "animated-section" },
    { name: "Projects", to: "project-cards" },
    { name: "Dialogue", to: "dialogue-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-red-700 dancing-script-topic">
            Gensler
          </h1>
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
                activeClass="text-red-700 border-b-2 border-red-700"
                className="cursor-pointer text-gray-700 font-medium pb-1 hover:text-red-700 transition-all duration-300"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-gray-800 hover:text-red-700 transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="bg-white border-t border-gray-200 shadow-lg">
          {navLinks.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 hover:text-red-700 transition-all duration-300"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;