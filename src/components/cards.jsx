import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0); // for animation direction

  const limit = 6;
  const baseUrl = "http://localhost:5000/api/cards";

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

  function handleNext() {
    if (page < pageCount) {
      setDirection(1);
      setPage(page + 1);
    }
  }

  function handlePrev() {
    if (page > 1) {
      setDirection(-1);
      setPage(page - 1);
    }
  }

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  if (loading)
    return <p className="text-center text-gray-500">Loading cards...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

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
          className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-5 shadow-md text-center hover:shadow-xl transition-all"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[150px] object-cover rounded-md mb-3"
              />
              <small className="block text-sm text-gray-500 mb-1">
                {card.category}
              </small>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
            page === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          ⬅
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {pageCount}
        </span>

        <button
          onClick={handleNext}
          disabled={page === pageCount}
          className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
            page === pageCount
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          ➡
        </button>
      </div>
    </div>
  );
}
