import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import { BackgroundBeams } from "./components/ui/background-beams";
import todoImage from "./assets/to-do-app.png";
import invoiceAppImage from "./assets/invoice-app.png";
import gsap from "gsap";

function App() {
  const projectContainerCSS =
    "bg-black flex flex-col items-center justify-between p-10 rounded-2xl text-white max-sm:h-auto";

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
      <div>
        <Nav />
        <main className="flex flex-col h-[calc(100vh-82px)] items-center justify-center max-sm:ml-10">
          <h1 className="text-white text-[6em] font-bold max-sm:text-[4em]">
            Hi, I'm <span className="text-orange-500">Nethaji</span>
          </h1>
          <h2 className="text-white text-[1.5em] font-semibold max-sm:text-[2em] text-center mt-4">
            Aspiring front-end developer crafting responsive and intuitive web
            apps using HTML, CSS, and JavaScript.
          </h2>
        </main>
        <article
          id="projects"
          className="h-[100vh] w-100 bg-white flex items-center justify-center max-sm:h-auto"
        >
          <div className="w-[1100px] h-[100%] grid grid-rows-2 grid-cols-2 grid-flow-row gap-8 p-8 max-sm:grid-cols-1 max-sm:grid-rows-none ">
            <div className={projectContainerCSS}>
              <h1>Simple To-do App</h1>
              <div className="imageContainer">
                <img
                  className="h-[200px] max-sm:h-[300px]"
                  src={todoImage}
                  alt="Image of to do app"
                />
              </div>
              <a
                href="https://main.d42gyj6qo5xpt.amplifyapp.com/"
                target="_blank"
              >
                <button className="p-5 bg-white text-black rounded-full">
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
                href="https://main.d28s2qxxh85lk3.amplifyapp.com/"
                target="_blank"
              >
                <button className="p-5 bg-white text-black rounded-full">
                  Show Project
                </button>
              </a>
            </div>
          </div>
        </article>
      </div>
      <BackgroundBeams className="-z-50" />
      <footer className="py-2 flex items-center justify-center h-10">
        <p className="text-white text-sm">
          &copy; Designed and developed by Nethaji!
        </p>
      </footer>
    </div>
  );
}

export default App;
