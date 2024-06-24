import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BackgroundBeams } from "./components/ui/background-beams";
import todoImage from "./assets/to-do-app.png";
import invoiceAppImage from "./assets/invoice-app.png";

function App() {
  const projectContainerCSS =
    "bg-black flex flex-col items-center justify-between p-10 text-white max-sm:h-auto";
  const textArr = ["I Design Websites", "I Develop Web Apps"];

  const [index, setIndex] = useState(0);
  const [heroText, setHeroText] = useState(textArr[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArr.length);
      setHeroText(textArr[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, textArr]);

  return (
    <div>
      <div>
        <Nav />
        <main className="flex flex-col h-[100vh] ml-72 justify-center max-sm:ml-10">
          <h1 className="text-white text-[6em] font-bold max-sm:text-[4em]">
            Hi I&apos;m <span className="text-orange-500">Nethaji!</span>
          </h1>
          <h1
            key={index}
            className="text-white text-[4em] font-bold max-sm:text-[2em]"
          >
            {heroText}
          </h1>
        </main>
        <article className="h-[100vh] w-100 bg-white flex items-center justify-center max-sm:h-auto">
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
                <button className="p-5 bg-white text-black">
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
                <button className="p-5 bg-white text-black">
                  Show Project
                </button>
              </a>
            </div>
            <div className={projectContainerCSS}>
              <h1>Sample Project</h1>
              <div className="h-[200px] max-sm:h-[300px] flex items-center justify-center">
                <h1>This is project image container</h1>
              </div>
              <button className="p-5 bg-white text-black">Show Project</button>
            </div>
          </div>
        </article>
      </div>
      <BackgroundBeams className="-z-50" />
    </div>
  );
}

export default App;
