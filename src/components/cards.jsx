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
  const baseUrl = "https://gensler-backend.vercel.app//api/cards";

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
    <div className="text-center py-10 bg-gray-50 relative overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            px-4
            md:px-8
            max-w-7xl
            mx-auto
            w-full
          "
        >
           {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08, // ⭐ staggered card fade-in
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="
                bg-white
                rounded-2xl
                p-4
                shadow-md
                hover:shadow-xl
                transition-all
                flex
                flex-col
                justify-between
                w-full
                h-auto
              "
            >
              <div className="w-full mb-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e";
                  }}
                />
              </div>

              <div className="text-left flex flex-col flex-grow">
                <small className="block text-sm text-gray-500 mb-1">
                  {card.category}
                </small>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ✅ Pagination Controls */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-5 py-2 rounded-md text-white font-medium transition-all duration-300 ${
            page === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
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
          className={`px-5 py-2 rounded-md text-white font-medium transition-all duration-300 ${
            page === pageCount
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
