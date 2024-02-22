import "./App.sass";
import Nav from "../components/Nav";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Hi I&apos;m Nethaji</h1>
        <TypeAnimation
          sequence={[
            "</Front End Developer>", // Content that needs to be typed
            2000, // Waiting period before changing
            "</UI Designer>",
            2000,
            "</Photographer>",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1.5em",
            display: "inline-block",
            marginBottom: "1em",
          }}
        />
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="logo-container">
            <img src="/tech-stack/html.svg"></img>
            <img src="/tech-stack/css.svg"></img>
            <img src="/tech-stack/js.svg"></img>
            <img src="/tech-stack/vscode.svg"></img>
            <img src="/tech-stack/react.svg"></img>
            <img src="/tech-stack/next-js.svg"></img>
            <img src="/tech-stack/photoshop.svg"></img>
            <img src="/tech-stack/figma.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
