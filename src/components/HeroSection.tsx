import { useEffect, useRef } from "react";
import gsap from "gsap";
import DownArrow from "./DownArrow";

import { AuroraBackground } from "./ui/aurora-background";
import { MoveUpRightIcon } from "lucide-react";

function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      subheadingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <AuroraBackground>
        <h1
          ref={headingRef}
          className="text-[#111111] text-[6em] font-bold max-sm:text-[3em]"
        >
          Hi, I'm
          <span className="text-orange-500 ml-4">Nethaji</span>
        </h1>
        <h2
          ref={subheadingRef}
          className="text-[#111111] text-[1.5em] font-semibold max-sm:text-[.8em] text-center mt-4"
        >
          Aspiring front-end developer crafting responsive and intuitive web
          apps using HTML, CSS, and JavaScript.
        </h2>
        <DownArrow />
        <div className="z-10 flex items-center space-x-4">
          <a
            href="#projects"
            rel="noopener noreferrer"
            className="bg-white hover:scale-105 transition-all border-2 shadow-lg  border-black p-4 z-10 rounded-xl text-black hover:cursor-pointer flex items-center space-x-1"
          >
            View my projects
          </a>
          <a
            href="https://github.com/imnethaji"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 shadow-lg hover:scale-105 transition-all rounded-xl text-white hover:cursor-pointer flex items-center space-x-1"
          >
            <span>GitHub</span>
            <MoveUpRightIcon className="h-4" />
          </a>
        </div>
      </AuroraBackground>
    </main>
  );
}

export default HeroSection;
