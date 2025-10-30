import React from "react";

const DialogueSection = () => {
  return (
    <section className="bg-[#f5f5f5]  border-[#e0e0e0] py-[80px] px-[20px] sm:py-[60px] sm:px-[20px]">
      <div className="max-w-[720px] w-full mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <img
          src="https://www.gensler.com/uploads/image/38246/filename/dialogue_now_masthead_1618248672.png"
          alt="Dialogue Now"
          className="w-[220px] h-auto opacity-95 mb-[25px] md:mb-0"
        />

        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="text-[16px] text-[#6a6a6a] leading-relaxed mb-[30px] font-sans">
            Want more of Gensler's design insights? Sign up for <br />
            our <strong className="text-[#333] font-semibold">
              dialogue
            </strong>{" "}
            Now newsletter to get regular <br />
            updates sent directly to your inbox.
          </p>
          <button className="bg-[#e41e26] text-white border-2 py-[13px] px-[36px] text-[14px] font-bold tracking-[0.8px] cursor-pointer hover:bg-black transition-all duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default DialogueSection;
