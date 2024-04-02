import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  const textArr = [
    "I Photograph Weddings",
    "I Design Websites",
    "I Develop Web Apps",
  ];

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
        <main className="flex flex-col h-[85vh] ml-72 justify-center max-sm:ml-10">
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
      </div>
      <BackgroundBeams className="-z-50" />
    </div>
  );
}

export default App;
