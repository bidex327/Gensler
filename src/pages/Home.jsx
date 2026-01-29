import React, { useState, useEffect } from "react";
import Slide from "../components/swiper";
import Hero from "../components/Hero";
import Cards from "../components/cards";
import HeroSection from "../components/HeroSection";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center overflow-x-hidden">
      {/* Top Slider Section */}
      <section className="w-full">
        <Slide />
      </section>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-6">
        <Hero />
      </section>

      {/* Cards Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
        <Cards />
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 px-4">
        <button className="text-black border border-black py-3 px-6 rounded font-semibold transition-all duration-300 hover:bg-yellow-400 w-full sm:w-auto text-center">
          VIEW LATEST RESEARCH
        </button>
        <button className="text-black border border-black py-3 px-6 rounded font-semibold transition-all duration-300 hover:bg-yellow-400 w-full sm:w-auto text-center">
          VIEW DIALOGUE BLOG
        </button>
      </div>

      {/* Extra Hero Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-12">
        <HeroSection />
      </section>

      {/* Animated Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-12 mb-10">
        <AnimatedSection />
      </section>
    </div>
  );
}
