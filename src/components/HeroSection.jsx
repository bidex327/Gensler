import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#1b1b1b] text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">

          <p className="uppercase tracking-[4px] text-red-500 font-semibold text-sm mb-4">
            About Gensler
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We are creating a better world
            <br className="hidden sm:block" />
            through the power of design.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-8 max-w-3xl">
            Gensler is a global architecture, design, and planning firm with 56
            locations across Asia, Europe, Australia, the Middle East, and the
            Americas. Every day we impact millions of people’s lives with the
            spaces we create, which is why people are at the center of everything
            we do. Designing for the human experience is what allows us to tackle
            the toughest challenges facing cities and shape a more resilient and
            inclusive future for everyone.
          </p>

          <button
            className="
              mt-10
              border-2
              border-white
              px-8
              py-4
              rounded-md
              font-semibold
              tracking-wide
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:border-yellow-400
              hover:text-black
              w-full
              sm:w-auto
            "
          >
            LEARN MORE ABOUT GENSLER
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;