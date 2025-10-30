import React from "react";
import { FaFacebook,  FaYoutube, FaTwitterSquare, FaInstagram, FaLinkedinIn,} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black p-8">
      {/* Top section: image + text */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="md:w-1/2 w-full">
          <img
            src="https://static1.gensler.com/uploads/image/85346/gensler-la-1280x900_1686179621.jpg"
            alt="Gensler Office"
            className="w-full object-cover rounded-xl"
          />
        </div>

        <div className="text-white md:w-1/2 w-full flex flex-col justify-center mt-40 ">
          <h2 className="text-4xl font-semibold mb-4">
            Design Your Career With Us
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed max-w-md text-sm">
            We grow our firm by growing our people — if you are a recent
            graduate or a seasoned designer who believes in the power of design,
            we invite you to search for opportunities and explore how you can
            reimagine the future with us.
          </p>
          <a
            href="#"
            className="  border-2 border-white rounded-sm text-white font-medium px-2 py-2  hover:bg-amber-300 transition-all duration-300 w-fit"
          >
     
            JOIN OUR TEAM
          </a>
        </div>
      </div>

      {/* Middle navigation links */}
      <ul className="flex flex-wrap gap-4 mt-10 text-white pt-6 text-sm mr-96 justify-center place-content-start">
        <li className=" hover:text-amber-200 transition-all duration-300  cursor-pointer">CONTACT</li>
        <li className=" hover:text-amber-200 transition-all duration-300 cursor-pointer">GENSER FACT SHEET</li>
        <li className=" hover:text-amber-200 transition-all duration-300  cursor-pointer">GUIDING PRINCIPLE</li>
        <li className=" hover:text-amber-200 transition-all duration-300 cursor-pointer">NEWSLETTER</li>
         <li className=" hover:text-amber-200 transition-all duration-300 cursor-pointer">INCLUSION</li>
          <li className=" hover:text-amber-200 transition-all duration-300 cursor-pointer">RESILIENCE</li>
      </ul>

      {/* Bottom section */}
      <section className="mt-10 flex flex-col md:flex-row justify-between items-center p-2 text-white  hover:border-amber-300 ml-80">
        <ul className="flex gap-4 mb-4 md:mb-0 items-center">
          <li className="cursor-pointer  hover:text-amber-200 transition-all duration-300"><FaFacebook /></li>
          <li className="cursor-pointer  hover:text-amber-200 transition-all duration-300 "><FaYoutube /></li>
          <li className="cursor-pointer  hover:text-amber-200 transition-all duration-300"><FaTwitterSquare /></li>
          <li className="cursor-pointer  hover:text-amber-200 transition-all duration-300"><FaInstagram /></li>
          <li className="cursor-pointer  hover:text-amber-200 transition-all duration-300"><FaLinkedinIn /></li>
          
    
            
        </ul>

        <div >
        <ul className="flex flex-wrap justify-center gap-2 mb-4 md:mb-0 text-sm mr-80 ">
          <li>&copy; 2024 Company Name. All rights reserved</li>
             <li className="cursor-pointer hover:text-amber-300">Privacy statement </li>
               <li className="cursor-pointer hover:text-amber-300">Cookies preference</li>
           <li className="cursor-pointer hover:text-amber-300"> Transparency statement</li>
        
        </ul>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
