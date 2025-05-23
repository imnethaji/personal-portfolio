import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DownArrow() {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  const handleClick = () => {
    const nextSection = document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className="mt-20">
      <svg
        ref={arrowRef}
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
