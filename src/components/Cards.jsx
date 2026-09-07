import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Cards() {
  const [allCards, setAllCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0);

  const limit = 4;
  const cards = allCards.slice((page - 1) * limit, page * limit);
  const baseUrl = "https://gensler-backend.vercel.app/api/cards";

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(baseUrl);
        if (!res.ok) throw new Error("Failed to fetch cards");
        const data = await res.json();
        setAllCards(data.cards);
        setPageCount(Math.ceil(data.cards.length / limit));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

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
    enter: (dir) => ({ opacity: 0, x: dir >= 0 ? 60 : -60 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir >= 0 ? -60 : 60,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 py-10" role="status">
        Loading cards…
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-600 py-10" role="alert">
        Error: {error}
      </p>
    );

  return (
    <div id="cards" className="text-center py-16 bg-gray-50 relative overflow-hidden">
      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-7xl mx-auto w-full"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col justify-between w-full h-auto text-left"
            >
              <div className="w-full mb-3 overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e";
                  }}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <small className="block text-xs uppercase tracking-wide text-gray-500 mb-1">
                  {card.category}
                </small>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 break-words">
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

      <div className="mt-10 flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          aria-label="Previous page"
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300 ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black hover:bg-red-700"
          }`}
        >
          <FaChevronLeft />
        </button>

        <span className="text-gray-700 font-medium text-sm">
          Page {page} of {pageCount}
        </span>

        <button
          onClick={handleNext}
          disabled={page === pageCount}
          aria-label="Next page"
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300 ${
            page === pageCount
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black hover:bg-red-700"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}