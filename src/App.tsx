import { useEffect, useRef } from "react";
import Lenis from "lenis";
import todoImage from "./assets/to-do-app.png";
import invoiceAppImage from "./assets/invoice-app.png";
import rockPaperScissorsAppImage from "./assets/rock-paper-scissors.png";
import multiStepFormImage from "./assets/multi-step-form-app.png";
import gsap from "gsap";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";

function App() {
  const projectContainerCSS =
    "bg-[#222123] flex flex-col items-center justify-between w-[350px] max-sm:w-[90%] h-[500px] py-8 rounded-2xl text-white max-sm:h-[530px]";

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out effect
      smoothWheel: true, // Enables smooth scroll for mouse wheel
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  // Pulse an arrow downward
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div>
      <div className="HeroSection">
        <HeroSection />
      </div>
      <Skills />
      <section
        id="projects"
        className="flex items-center justify-center h-screen max-sm:h-auto"
      >
        <div className="w-full max-w-[80vw] max-sm:max-w-[90vw] h-full max-sm:h-auto p-8 flex flex-col items-center max-sm:justify-center max-sm:px-0">
          <h2 className="mb-8 text-4xl font-bold">Projects</h2>
          <div className="flex flex-wrap justify-between gap-6 w-full max-sm:justify-center">
            <div
              className={projectContainerCSS}
              style={{
                backgroundImage: `url(${todoImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="font-bold text-md">Simple To-do App</h1>
              <div className="imageContainer"></div>
              <a
                href="https://main.d42gyj6qo5xpt.amplifyapp.com/"
                target="_blank"
              >
                <button className="p-3 w-40 bg-[#e3a458] text-[#523122] rounded-md">
                  View Project
                </button>
              </a>
            </div>
            <div
              className={projectContainerCSS}
              style={{
                backgroundImage: `url(${multiStepFormImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="font-bold text-md">Multi-step form</h1>
              <div className="imageContainer"></div>
              <a
                href="https://main.d2rdekw3ov6iln.amplifyapp.com/"
                target="_blank"
              >
                <button className="p-3 w-40 bg-[#e3a458] text-[#523122] rounded-md">
                  View Project
                </button>
              </a>
            </div>
            <div
              className={projectContainerCSS}
              style={{
                backgroundImage: `url(${rockPaperScissorsAppImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="font-bold text-md">Rock Paper Scissor</h1>
              <div className="imageContainer"></div>
              <a
                href="https://rock-paper-scissor-iota-one.vercel.app/"
                target="_blank"
              >
                <button className="p-3 w-40 bg-[#e3a458] text-[#523122] rounded-md">
                  View Project
                </button>
              </a>
            </div>
            <div className={projectContainerCSS}>
              <h1 className="font-bold text-md">Invoice App</h1>
              <img
                className="h-[200px] max-sm:h-[300px]"
                src={invoiceAppImage}
                alt="Image of invoice app"
              />
              <a
                href="https://invoice-app-olive-theta.vercel.app/"
                target="_blank"
              >
                <button className="p-3 w-40 bg-[#e3a458] text-[#523122] rounded-md">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <BackgroundBeams className="-z-50" /> */}
      <footer className="py-5 flex bg-[#222123] items-center justify-center h-[30px]">
        <p className="text-white text-xs">
          &copy; Designed and developed by Nethaji!
        </p>
      </footer>
    </div>
  );
}

export default App;
