import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0);

  const limit = 4;
  // ✅ Replace with your live backend
  const baseUrl = "https://gensler-backend.vercel.app/api/cards";

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${baseUrl}?page=${page}&limit=${limit}`);
        if (!res.ok) throw new Error("Failed to fetch cards");

        const data = await res.json();
        setCards(data.cards || []);
        setPageCount(data.pageCount || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [page]);

  const handleNext = () => {
    if (page < pageCount) {
      setDirection(1);
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setDirection(-1);
      setPage(page - 1);
    }
  };
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.12, 0, 0.39, 1],
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  if (loading)
    return <p className="text-center text-gray-500 py-10">Loading cards...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">Error: {error}</p>;

  return (
   <div className="bg-gray-50 py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <p className="uppercase tracking-[4px] text-red-700 font-semibold text-sm">
        Featured Insights
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        Research & Stories
      </h2>

      <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
        Explore the latest thinking, projects, and innovations shaping the
        future of architecture, workplace design, and urban environments.
      </p>
    </div>

    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e";
                }}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow text-left">
              <small className="uppercase tracking-[2px] text-red-700 font-semibold text-xs">
                {card.category}
              </small>

              <h3 className="mt-3 text-xl font-bold text-gray-900 leading-7 group-hover:text-red-700 transition">
                {card.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7 flex-grow">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>

    {/* Pagination */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={`px-6 py-3 rounded-md text-white font-semibold transition ${
          page === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-red-700"
        }`}
      >
        ⬅ Prev
      </button>

      <span className="text-gray-700 font-medium">
        Page {page} of {pageCount}
      </span>

      <button
        onClick={handleNext}
        disabled={page === pageCount}
        className={`px-6 py-3 rounded-md text-white font-semibold transition ${
          page === pageCount
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-red-700"
        }`}
      >
        Next ➡
      </button>
    </div>

    {/* Bottom Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-12">
      <button className="border-2 border-black px-8 py-3 rounded-md font-semibold transition duration-300 hover:bg-yellow-400 hover:border-yellow-400 w-full sm:w-auto">
        VIEW LATEST RESEARCH
      </button>

      <button className="border-2 border-black px-8 py-3 rounded-md font-semibold transition duration-300 hover:bg-yellow-400 hover:border-yellow-400 w-full sm:w-auto">
        VIEW DIALOGUE BLOG
      </button>
    </div>

  </div>
</div>
  );
}
