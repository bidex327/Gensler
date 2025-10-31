
import React, {useState, useEffect} from 'react'
import Slide from '../components/swiper';
import Hero from "../components/hero"
import Cards from '../components/cards';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';


export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);

return(
  <div className="w-full relative">
<Slide/>
<Hero/>
<Cards/>
<div className="flex justify-center items-center gap-5 mt-10">
  <button className="text-black border border-black py-3 px-6 rounded cursor-pointer font-semibold transition-colors duration-300 hover:bg-yellow-400">
    VIEW LATEST RESEARCH
  </button>
  <button className="text-black border border-black py-3 px-6 rounded cursor-pointer font-semibold transition-colors duration-300 hover:bg-yellow-400">
    VIEW DIALOGUE BLOG
  </button>
</div>

<HeroSection/>
<AnimatedSection/>



  </div>


)
}


  