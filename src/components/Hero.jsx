import React from "react";

const Hero = () => {
  return (
    <main className="w-full">

      {/* First Blog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <img
                src="https://static1.gensler.com/uploads/image/98217/500_Year_Building_N3_1024_1748982261.jpg"
                alt="AI Design"
                className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <span className="uppercase tracking-[3px] text-red-700 font-semibold text-sm">
                Blog
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 hover:text-amber-500 transition duration-300">
                Design as Storytelling:
                <br />
                How AI Is Transforming the Way We Imagine,
                Create and Connect
              </h1>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                AI isn’t here to replace creativity. It’s here to amplify it,
                helping us move from inspiration to iteration with greater speed
                and substance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Second Blog */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="order-2 lg:order-1">

              <span className="uppercase tracking-[3px] text-red-700 font-semibold text-sm">
                Blog
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 hover:text-amber-500 transition duration-300">
                Designing Workplaces That Work
                <br />
                — With Your People
              </h2>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                When employees are involved in the planning and design process,
                the workspaces we create are more effective, engaging, and
                human.
              </p>

            </div>

            <div className="order-1 lg:order-2">

              <img
                src="https://static1.gensler.com/uploads/image/99523/Gensler_LA_N18_1024_1755721407.jpg"
                alt="Modern Workplace"
                className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Hero;