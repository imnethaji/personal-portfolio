import Nav from "./components/Nav";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  return (
    <>
      <Nav />
      <main className="z-50 flex flex-col h-[85vh] ml-72 justify-center">
        <h1 className="text-white text-[6em] font-bold">
          Hi I&apos;m <span className="text-orange-500">Nethaji!</span>
        </h1>
        <h1 className="text-white text-[4em] font-bold">
          I Photograph, <br /> I Design, <br /> I Develop
        </h1>
      </main>
      <BackgroundBeams />
    </>
  );
}

export default App;
