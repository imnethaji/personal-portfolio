import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <main className="hero">
        <h4 className="flex text-stone-300">Hello Hello</h4>
        <h1>
          Hi I&apos;m <span className="name">Nethaji!</span>
        </h1>
        <h1>
          I Photograph, <br /> I Design, <br /> I Develop
        </h1>
      </main>
    </>
  );
}

export default Home;
