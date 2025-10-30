import React, { useState } from "react";

const ProjectCard = ({ image, title, location, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[320px] h-[380px] rounded-xl overflow-hidden shadow-[0_6px_15px_rgba(0,0,0,0.1)] cursor-pointer transition-transform duration-300 bg-black hover:-translate-y-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-[85%]"
        />
        <div className="absolute bottom-[15px] left-[20px] text-white text-[1.2rem] font-semibold drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
          {title}
        </div>
      </div>

      
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-[#0f0f0f] bg-gradient-to-br from-[#f3efef] to-[rgba(105,102,102,0.95)] transition-all duration-500 transform ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="px-[25px] text-left">
          <h3 className="text-[1.4rem] mb-[10px]">{title}</h3>
          <p className="font-medium text-[1rem] text-[#666] mb-[10px]">
            {location}
          </p>
          <p className="text-[0.95rem] leading-[1.5] mb-[20px]">
            {description}
          </p>
          <span className="text-[1.6rem] text-[#ff4747] mt-[10px] inline-block">
            ➜
          </span>
        </div>
      </div>
    </div>
  );
};


const ProjectCards = () => {
  const projects = [
    {
      image:
        "https://static1.gensler.com/uploads/image/94931/project-toca-social-birmingham-508x508_1731519207.jpg",
      title: "TOCA Social Birmingham",
      location: "Birmingham, UK",
      description:
        "A new social experience blending sports and entertainment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      title: "Kayanee",
      location: "Riyadh, Saudi Arabia",
      description:
        "A pioneering fitness and lifestyle brand focused on women's health.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      title: "Star Cinema Grill",
      location: "Texas, USA",
      description:
        "Luxury dine-in cinema experience offering premium service and design.",
    },
  ];

  return (
    <section className="text-center bg-[#ededed] py-[80px] px-[20px] sm:py-[60px] sm:px-[15px]">
      <h2 className="text-lg sm:text-base font-bold mb-[50px] text-[#111] tracking-[3px] capitalize sm:translate-x-0 -translate-x-[20%] sm:text-center">
        FEATURED PROJECTS
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-[30px] py-[60px] px-[20px] bg-[#ededed] sm:py-[40px] sm:px-[10px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
