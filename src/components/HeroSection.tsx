import { useEffect, useRef } from "react";
import gsap from "gsap";
import DownArrow from "./DownArrow";

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
      <h1
        ref={headingRef}
        className="text-white text-[6em] font-bold max-sm:text-[3em]"
      >
        Hi, I'm <span className="text-orange-500">Nethaji</span>
      </h1>
      <h2
        ref={subheadingRef}
        className="text-white text-[1.5em] font-semibold max-sm:text-[.8em] text-center mt-4"
      >
        Aspiring front-end developer crafting responsive and intuitive web apps
        using HTML, CSS, and JavaScript.
      </h2>
      <DownArrow />
    </main>
  );
}

export default HeroSection;
