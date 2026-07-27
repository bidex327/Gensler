import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white">
      {/* Career Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://static1.gensler.com/uploads/image/85346/gensler-la-1280x900_1686179621.jpg"
              alt="Gensler Office"
              className="w-full h-[300px] sm:h-[420px] object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[4px] text-red-500 text-sm font-semibold mb-4">
              Careers
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Design Your Career
              <br />
              With Us
            </h2>

            <p className="text-gray-300 leading-8 text-base sm:text-lg max-w-xl">
              We grow our firm by growing our people. Whether you're a recent
              graduate or an experienced designer who believes in the power of
              design, explore opportunities to help shape the future with us.
            </p>

            <button className="mt-8 border-2 border-white px-8 py-4 rounded-md font-semibold tracking-wide transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black">
              JOIN OUR TEAM
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-14"></div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium">
          {[
            "CONTACT",
            "GENSLER FACT SHEET",
            "GUIDING PRINCIPLES",
            "NEWSLETTER",
            "INCLUSION",
            "RESILIENCE",
          ].map((item) => (
            <button
              key={item}
              className="hover:text-yellow-400 transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Social */}
          <div className="flex items-center gap-5 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-yellow-400 transition" />
            <FaYoutube className="cursor-pointer hover:text-yellow-400 transition" />
            <FaTwitterSquare className="cursor-pointer hover:text-yellow-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-400 transition" />
          </div>

          {/* Copyright */}
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 text-sm text-gray-400 text-center">
            <span>© 2025 Gensler. All rights reserved.</span>

            <button className="hover:text-yellow-400 transition">
              Privacy Statement
            </button>

            <button className="hover:text-yellow-400 transition">
              Cookie Preferences
            </button>

            <button className="hover:text-yellow-400 transition">
              Transparency Statement
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterSection;