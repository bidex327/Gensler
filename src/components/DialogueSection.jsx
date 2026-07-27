import React from "react";

const DialogueSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://www.gensler.com/uploads/image/38246/filename/dialogue_now_masthead_1618248672.png"
              alt="Dialogue Now"
              className="w-52 sm:w-60 lg:w-72 h-auto"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">

            <p className="uppercase tracking-[4px] text-red-700 font-semibold text-sm mb-4">
              Newsletter
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Stay Inspired With Dialogue Now
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-8">
              Want more of Gensler's design insights? Sign up for our{" "}
              <span className="font-semibold text-black">Dialogue Now</span>{" "}
              newsletter and receive the latest research, projects, and design
              thinking delivered directly to your inbox.
            </p>

            <button className="mt-8 bg-red-700 text-white px-8 py-4 rounded-md font-semibold tracking-wide transition-all duration-300 hover:bg-black w-full sm:w-auto">
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DialogueSection;