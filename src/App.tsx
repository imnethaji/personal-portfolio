import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import { BackgroundBeams } from "./components/ui/background-beams";
import todoImage from "./assets/to-do-app.png";
import invoiceAppImage from "./assets/invoice-app.png";
import gsap from "gsap";
import DownArrow from "./components/DownArrow";

function App() {
  const projectContainerCSS =
    "bg-black flex flex-col items-center justify-between h-[400px] p-8 rounded-2xl text-white max-sm:h-auto";

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
        <Nav />
        <main className="flex flex-col h-screen items-center justify-center">
          <h1 className="text-white text-[6em] font-bold max-sm:text-[3em]">
            Hi, I'm <span className="text-orange-500">Nethaji</span>
          </h1>
          <h2 className="text-white text-[1.5em] font-semibold max-sm:text-[.8em] text-center mt-4">
            Aspiring front-end developer crafting responsive and intuitive web
            apps using HTML, CSS, and JavaScript.
          </h2>
          <DownArrow></DownArrow>
        </main>
        <section
          id="projects"
          className="h-[100vh] w-100 bg-white flex items-center justify-center max-sm:h-auto rounded-xl"
        >
          <div className="w-[1100px] h-[100%] p-8 flex flex-col items-center">
            <h1 className="mb-8 text-[4em] font-bold">Projects</h1>
            <div className="grid grid-rows-2 grid-cols-2 grid-flow-row gap-8 max-sm:grid-cols-1 max-sm:grid-rows-none">
              <div
                className={projectContainerCSS}
                style={{
                  backgroundImage: `url(${todoImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              >
                <h1>Simple To-do App</h1>
                <div className="imageContainer"></div>
                <a
                  href="https://main.d42gyj6qo5xpt.amplifyapp.com/"
                  target="_blank"
                >
                  <button className="p-4 w-40 bg-white text-black rounded-full">
                    Show Project
                  </button>
                </a>
              </div>
              <div className={projectContainerCSS}>
                <h1>Invoice App</h1>
                <img
                  className="h-[200px] max-sm:h-[300px]"
                  src={invoiceAppImage}
                  alt="Image of invoice app"
                />
                <a
                  href="https://invoice-app-olive-theta.vercel.app/"
                  target="_blank"
                >
                  <button className="p-4 w-40 bg-white text-black rounded-full">
                    Show Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BackgroundBeams className="-z-50" />
      <footer className="py-2 flex items-center justify-center h-[30px]">
        <p className="text-white text-xs">
          &copy; Designed and developed by Nethaji!
        </p>
      </footer>
    </div>
  );
}

export default App;
