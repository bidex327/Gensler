import React from "react";

export default function Hero ()  {
    return (
        <main className="container w-full items-center justify-center">
         <section className="bg-white w-full flex items-center flex-col">
        <div className="w-full flex flex-col items-center mt-[2rem] md:mt-[4rem] lg:mt[8rem] mb-[2rem] md:mb-[4rem] lg:mb-[4rem] justify-center ml-64">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-3 md:mb-[1rem] md:mb-10px mb-[2rem] px-2">
            <div>
              <img
                src="https://static1.gensler.com/uploads/image/98217/500_Year_Building_N3_1024_1748982261.jpg"
                className="sm:w-full md:w-[30rem] lg:w-[40rem] mr-[30rem] align-middle "
              />
            </div>
            <div className="mr-70 mt-10 text-4x1 font-semibold">
              <span>BLOG</span>
              <h1 className="text-4xl text-black font-bold hover:text-amber-500 transition ease-in-out ">
                Design as Storytelling: <br />
                How AI Is Transforming the way we Imagine,
                <br />
                Create and Connect
              </h1>
              <p>
                AI isn’t here to replace creativity. It’s here to amplify it —
                helping us move from inspiration to iteration with greater speed
                and substance.
              </p>
            </div>
           
          </div>
        </div>
        
      </section>

 <section className="bg-white w-full flex items-center flex-col">
        <div className="w-full flex flex-col items-center mt-[2rem] md:mt-[4rem] lg:mt[8rem] mb-[2rem] md:mb-[4rem] lg:mb-[4rem] justify-center ml-64">
          <div className="w-full flex flex-col lg:flex-row-reverse justify-center gap-3 md:mb-[1rem] md:mb-10px mb-[2rem] px-2">
            <div>
              <img
                src="https://static1.gensler.com/uploads/image/99523/Gensler_LA_N18_1024_1755721407.jpg"
                className="sm:w-full md:w-[30rem] lg:w-[40rem] mr-[40rem] align-middle"
              />
            </div>
            <div className="mr-20 mt-10 text-4x1 font-semibold">
              <span>BLOG</span>
              <h1 className="text-4xl text-black font-semibold hover:text-amber-500 transition ease-in-out ">
                Designing Workplaces That Work <br/>
           — With Your People
              </h1>
              <p>
                When employees are involved in the planning and design <br/>
                process, the
            workspaces we create are more effective, <br/>
            engaging, and human.{" "}
              </p>
            </div>
           
          </div>
        </div>
        
      </section>
            
        </main>

    )
}