// import React from "react";
// import { BsDashLg } from "react-icons/bs";
// import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import { A11y } from "swiper/modules";
// const Slide = () => {
//   return (
//     <div className="mt-[6rem] md:mt-[8rem] 1g:mt-[2rem] ">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         navigation={true}
//         paginatiom="true"
//         slides-per-view={1}
//         spaceBetween={0}
//         className="mb-[2rem] w-full "
//       >
//         <SwiperSlide className="relative w-full h-screen">
//           <img
//             src="https://static2.gensler.com/uploads/hero_element/25757/thumb_desktop/thumbs/ibm-madison-05-600x900_1755891204_1600x900.jpg"
//             className="w-full h-full object-cover "
//           />
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20">
//             <h1 className="text-white text-4xl md:text-6xl font-bold italic">
//               {" "}
//               Interior Design Celebrates <br /> Gensler's 60th Anniversary
//             </h1>
//             <BsDashLg className="text-amber-300 size-15" />
//             <p className="text-white max-w-2x1 mt-4 text-3x1">
//               The Industry Publication Marks a Milestone in the Firm’s History
//               With a<br />
//               Roundup of Global Projects and People Shaping What’s Next in
//               Design
//             </p>
//             <button className="rounded  mt-3 px-3 py-3 bg-black/5 border-2 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               LEARN MORE
//             </button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="relative w-full h-screen">
//           <video loop={true} autoPlay={true} width="100%" height="100%">
//             <source src="https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4"></source>
//           </video>
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20">
//             <h1 className="text-white text-4xl md:text-5xl font-bold italic">
//               {" "}
//               What Makes a City Magnetic?
//             </h1>

//             <BsDashLg className="text-amber-300 size-15" />
//             <p className="text-white max-w-2x1 mt-4 text-3x1">
//               Explore Gensler’s Newest Survey of Urbanites in 65 Cities Around
//               the World
//             </p>
//             <button className="rounded  mt-3 px-5 py-5 border-2 bg-black/5 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               LEARN MORE
//             </button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="relative w-full h-screen">
//           <img
//             src="https://static1.gensler.com/uploads/hero_element/25147/thumb_desktop/thumbs/horizon-hospital-2000x1125_1741041306_1600x900.jpg"
//             className="w-full h-full object-cover "
//           />
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20">
//             <h1 className="text-white text-6xl md:text-4xl font-bold italic">
//               {" "}
//               Prototyping the Hospital of the Future
//             </h1>
//             <BsDashLg className="text-amber-300 size-15" />
//             <p className="text-white max-w-2x1 mt-4 text-4x1">
//               Explore a New Design for a Hospital That Adapts to Its Community
//               Over Time
//             </p>
//             <button className="rounded  mt-3 px-5 py-5 border-2 bg-black/5 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               DISCOVER
//             </button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="relative w-full h-screen">
//           <video loop={true} autoPlay={true} width="100%" height="100%">
//             <source src="https://data.openasset.com/3f741c2e/016157d05d7b0b938f172c4f269611a0/F_250401_Gensler_San_Francisco_Reel_2025_mp4/F_250401_Gensler_San_Francisco_Reel_2025_videolarge.mp4"></source>
//           </video>
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20">
//             <h1 className="text-white text-6xl md:text-4xl font-bold italic">
//               {" "}
//               Navigating Change With Adaptable Workplace Design
//             </h1>
//             <BsDashLg className="text-amber-300 size-15" />
//             <p className="text-white max-w-2x1 mt-4 text-4x1">
//               New Data Uncovers the Amenities and Agency People Are Looking For
//             </p>
//             <button className="rounded  mt-3 px-5 py-5 border-2 bg-black/5 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               LEARN MORE
//             </button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="relative w-full h-screen">
//           <video loop={true} autoPlay={true} width="100%" height="100%">
//             <source src="https://data.openasset.com/3f741c2e/a63227216801fe631b141458e12ee6a9/F_250305_GPS_GenslerSF_Materials_Library_mp4/F_250305_GPS_GenslerSF_Materials_Library_videomedium.mp4"></source>
//           </video>
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20">
//             <h1 className="text-white text-6xl md:text-5xl font-bold italic">
//               {" "}
//               Fast Company Names Gensler a <br />
//               Most Innovative Company for the <br /> Second Year in a Row
//             </h1>
//             <BsDashLg className="text-amber-300 size-15" />
//             <p className="text-white max-w-2x1 mt-4 text-3x1">
//               The Gensler Product Sustainability (GPS) Standards™ Is Recognized
//               for
//               <br /> Helping the Industry Adopt More Regenerative Materials
//             </p>
//             <button className="rounded  border-2 mt-3 px-5 py-5 bg-black/5 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               LEARN MORE
//             </button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="relative w-full h-screen">
//           <video loop={true} autoPlay={true} width="100%" height="100%">
//             <source src="https://data.openasset.com/3f741c2e/d980c8c311d84ad78c0647b5ba86f05b/F_241121_N7_mp4/F_241121_N7_videomedium.mp4"></source>
//           </video>
//           <div className="absolute  inset-0 bg-black/30"></div>
//           <div className="absolute inset-0  flex flex-col justify-center px-8 md:px-20 align-middle float-left left-7">
//             <h1 className="text-white text-9xlxl md:text-4xl font-bold italic ">
//               {" "}
//               DESIGN <br />
//               FORECAST®
//               <br />
//               2025
//             </h1>
//             <p className="text-white max-w-2x1 mt-4 text-3x1">
//               The Gensler Product Sustainability (GPS) Standards™ Is Recognized
//               for
//               <br /> Helping the Industry Adopt More Regenerative Materials
//             </p>
//             <button className="rounded border-2 mt-3 px-2 py-2 bg-black/5 text-white font-medium hover:bg-amber-300 transition-all duration-300 w-fit">
//               LEARN MORE
//             </button>
//           </div>
//         </SwiperSlide>

//         <div className="bg-black box-border w-full pb-2 h-100% sticky text-xl ">
//           <div className="flex flex-row justify-between items-center gap-3 text-white text-xl mr-50 ml-50 pd-80 z-10">
//             <a className="font-light "> TRENDING TOPICS</a>
//             <a href="h" className="hover:underline">
//               {" "}
//               2025 Workplace Trends
//             </a>
//             <a href="h" className="hover:underline">
//               Design For Preparedness
//             </a>
//             <a href="h" className="hover:underline">
//               Conversions+™ by Gensler
//             </a>
//           </div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };
// export default Slide;


























import React from "react";
import { BsDashLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const buttonStyle =
  "mt-6 w-fit rounded-md border border-white/80 bg-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400";

const overlayStyle =
  "absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20";

const contentStyle =
  "absolute inset-0 z-10 flex items-center px-5 sm:px-8 md:px-14 lg:px-24";

const Slide = () => {
  return (
    <section className="mt-24 md:mt-32">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={0}
        className="w-full"

        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fbbf24",
          "--swiper-pagination-bullet-inactive-color": "#d1d5db",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
      >
        {/* ==================== Slide 1 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <img
            src="https://static2.gensler.com/uploads/hero_element/25757/thumb_desktop/thumbs/ibm-madison-05-600x900_1755891204_1600x900.jpg"
            alt="Gensler Anniversary"
            className="h-full w-full object-cover"
          />

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold italic leading-tight text-white sm:text-5xl lg:text-7xl">
                Interior Design Celebrates
                <br />
                Gensler's 60th Anniversary
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-2xl text-base leading-7 text-gray-200 sm:text-lg lg:text-xl">
                The Industry Publication Marks a Milestone in the Firm's
                History with a roundup of global projects and people shaping
                what's next in design.
              </p>

              <button className={buttonStyle}>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ==================== Slide 2 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4" />
          </video>

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold italic leading-tight text-white sm:text-5xl lg:text-6xl">
                What Makes a City Magnetic?
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-xl text-base leading-7 text-gray-200 sm:text-lg lg:text-xl">
                Explore Gensler's newest survey of urbanites in 65 cities around
                the world.
              </p>

              <button className={buttonStyle}>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
                {/* ==================== Slide 3 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <img
            src="https://static1.gensler.com/uploads/hero_element/25147/thumb_desktop/thumbs/horizon-hospital-2000x1125_1741041306_1600x900.jpg"
            alt="Hospital of the Future"
            className="h-full w-full object-cover"
          />

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-white">
                Prototyping the
                <br />
                Hospital of the Future
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-7 text-gray-200">
                Explore a new design for a hospital that adapts to its
                community over time.
              </p>

              <button className={buttonStyle}>
                Discover
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ==================== Slide 4 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://data.openasset.com/3f741c2e/016157d05d7b0b938f172c4f269611a0/F_250401_Gensler_San_Francisco_Reel_2025_mp4/F_250401_Gensler_San_Francisco_Reel_2025_videolarge.mp4" />
          </video>

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-white">
                Navigating Change With
                <br />
                Adaptable Workplace Design
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-7 text-gray-200">
                New data uncovers the amenities and agency people are looking
                for.
              </p>

              <button className={buttonStyle}>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ==================== Slide 5 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://data.openasset.com/3f741c2e/a63227216801fe631b141458e12ee6a9/F_250305_GPS_GenslerSF_Materials_Library_mp4/F_250305_GPS_GenslerSF_Materials_Library_videomedium.mp4" />
          </video>

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-white">
                Fast Company Names
                <br />
                Gensler a Most Innovative
                <br />
                Company for the Second
                <br />
                Year in a Row
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-7 text-gray-200">
                The GPS Standards™ are recognized for helping the industry adopt
                more regenerative materials.
              </p>

              <button className={buttonStyle}>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ==================== Slide 6 ==================== */}

        <SwiperSlide className="relative h-[75vh] sm:h-[80vh] lg:h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="https://data.openasset.com/3f741c2e/d980c8c311d84ad78c0647b5ba86f05b/F_241121_N7_mp4/F_241121_N7_videomedium.mp4" />
          </video>

          <div className={overlayStyle}></div>

          <div className={contentStyle}>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold italic leading-tight text-white">
                DESIGN
                <br />
                FORECAST®
                <br />
                2025
              </h1>

              <BsDashLg className="my-5 text-5xl text-amber-400" />

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-7 text-gray-200">
                Discover emerging design trends shaping the future of cities,
                workplaces, hospitality and innovation.
              </p>

              <button className={buttonStyle}>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <section className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-white lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Trending Topics
          </h3>

          <div className="flex flex-col gap-3 text-sm md:flex-row md:flex-wrap md:gap-8">
            <a href="#" className="transition hover:text-amber-400">
              2025 Workplace Trends
            </a>

            <a href="#" className="transition hover:text-amber-400">
              Design For Preparedness
            </a>

            <a href="#" className="transition hover:text-amber-400">
              Conversions+™ by Gensler
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Slide;