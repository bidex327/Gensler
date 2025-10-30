import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#1b1b1b] text-white mt-[60px] flex justify-center items-start text-center min-h-[50vh] py-[40px] px-[20px]">
      <div className="max-w-[900px] leading-relaxed text-left box-border px-[48px] w-full">
        <h1 className="text-[2.5rem] font-semibold mb-[25px] text-white">
          We are creating a better world <br /> through the power of design.
        </h1>

        <p className="text-[1.1rem] text-[#cccccc] mb-[40px]">
          Gensler is a global architecture, design, and planning firm with 56
          locations across Asia, Europe, Australia, the Middle East, and the
          Americas. Every day we impact millions of people’s lives with the
          spaces we create, which is why people are at the center of everything
          we do. Designing for the human experience is what allows us to tackle
          the toughest challenges facing cities and shape a more resilient and
          inclusive future for everyone.
        </p>

        <button className="bg-transparent border border-white text-white py-[12px] px-[12px] text-[1rem] tracking-[0.5px] cursor-pointer transition-all duration-300 hover:bg-[#f3e307] hover:text-black ">
          LEARN MORE ABOUT GENSLER
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
