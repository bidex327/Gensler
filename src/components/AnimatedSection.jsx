import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const links = [
    "San Diego Airport's New Terminal 1 Sets Global Benchmark",
    "The Rise of Outdoor Spaces at Airports",
    "How to Improve Airport Construction",
    'Designing "the Quiet Airport" at SFO',
  ];

  return (
    <section
      id="animated-section"
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden text-white flex justify-center items-center"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://static1.gensler.com/uploads/image/100396/1758310751637/project-san-diego-international-airport-terminal-1-2025-01-2000x1125.jpg")',
          scale: bgScale,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex flex-col gap-5 p-8 text-center max-w-4xl mx-auto"
        style={{ opacity: overlayOpacity }}
      >
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[4px] text-red-500 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Spotlight
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Reinventing Travel and the Future of Airports
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-200 leading-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          New and upgraded airports are easing — and elevating — the traveler
          experience through hospitality-driven design that connects culture,
          community, and the outdoors.
        </motion.p>

        <motion.nav
          className="flex flex-col items-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {links.map((text, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-white border-b border-transparent hover:border-red-500 hover:text-red-100 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.03 }}
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