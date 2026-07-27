import React, { useState } from "react";

const ProjectCard = ({ image, title, location, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[360px] h-[420px] rounded-2xl overflow-hidden shadow-lg bg-black cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Side */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          hovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-90"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Hover Side */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white to-gray-200 flex items-center transition-all duration-500 ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h3>

          <p className="uppercase tracking-wider text-red-700 font-semibold text-sm mb-4">
            {location}
          </p>

          <p className="text-gray-600 leading-7">
            {description}
          </p>

          <button className="mt-8 flex items-center gap-2 font-semibold text-red-700 hover:text-black transition">
            Learn More
            <span className="text-2xl">→</span>
          </button>
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
    <section className="bg-[#ededed] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-red-700 font-semibold text-sm">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Discover a selection of projects that demonstrate innovative
            architecture, thoughtful interiors, and impactful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectCards;