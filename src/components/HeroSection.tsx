import { useEffect, useRef } from "react";
import gsap from "gsap";
import DownArrow from "./DownArrow";

// import { AuroraBackground } from "./ui/aurora-background";
import { MoveUpRightIcon } from "lucide-react";

function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { opacity: 0, x: -1000 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 0.5,
        ease: "elastic",
      }
    ).fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "elastic",
        stagger: 0.2,
      },
      "-=0.3"
    );
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1
        ref={headingRef}
        className="text-[#222123] text-[6em] font-bold max-sm:text-[4em] max-sm:text-center max-sm:mb-6"
      >
        Hi, I'm
        <span className="inline-block px-3 text-[#7f3b2d] max-sm:block max-sm:ml-0 bg-[#e3a458] ml-4">
          Nethaji
        </span>
      </h1>
      <h2
        ref={subheadingRef}
        className="text-[#222123] text-[1.5em] font-semibold w-[90%] max-sm:w-[80%] max-sm:text-[1em] text-center mt-4"
      >
        Aspiring front-end developer crafting responsive and intuitive web apps
        using HTML, CSS, and JavaScript.
      </h2>
      <DownArrow />
      <div className="z-10 flex items-center space-x-4">
        <a
          href="#projects"
          rel="noopener noreferrer"
          className="bg-[#e3a458] hover:scale-105 transition-all font-bold shadow-lg p-4 z-10 rounded-xl text-[#7f3b2d] hover:cursor-pointer flex items-center space-x-1"
        >
          View my projects
        </a>
        <a
          href="https://github.com/imnethaji"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e3a458] p-4 font-bold shadow-lg hover:scale-105 transition-all rounded-xl text-[#7f3b2d] hover:cursor-pointer flex items-center space-x-1"
        >
          <span>GitHub</span>
          <MoveUpRightIcon className="h-4" />
        </a>
      </div>
    </main>
  );
}

export default HeroSection;
