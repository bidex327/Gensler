import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedSection = () => {
  const ref = useRef(null);

  // Track section scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-based motion values
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const overlayY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden text-white flex justify-center items-center"
    >
      {/* Animated background */}
      <motion.div
       className="absolute inset-0 z-[2] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 text-center"
        style={{
          backgroundImage:
            'url("https://static1.gensler.com/uploads/image/100396/1758310751637/project-san-diego-international-airport-terminal-1-2025-01-2000x1125.jpg")',
          scale: bgScale,
        }}
        aria-hidden="true"
      />

      {/* Overlay content with entrance and scroll animation */}
      <motion.div
        className="absolute top-0 z-[2] flex flex-col gap-5 p-8 text-center brightness-200"
        style={{ opacity: overlayOpacity, y: overlayY }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
        className="text-xs sm:text-sm uppercase tracking-[4px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          SPOTLIGHT
        </motion.h1>

        <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Reinventing Travel and the Future of Airports
        </motion.h2>

        <motion.p
         className="text-base sm:text-lg lg:text-xl text-gray-200 leading-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          New and upgraded airports are easing — and elevating — the traveler
          experience through hospitality-driven design <br /> that connects
          culture, community, and the outdoors.
        </motion.p>

        {/* Animated links section */}
        <motion.nav
          className="flex flex-col items-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            "San Diego Airport’s New Terminal 1 Sets Global Benchmark",
            "The Rise of Outdoor Spaces at Airports",
            "How to Improve Airport Construction",
            "Designing “the Quiet Airport” at SFO",
          ].map((text, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-white border-b border-transparent hover:border-white transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
