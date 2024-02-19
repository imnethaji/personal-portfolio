import "./App.sass";
import { Alert } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef(null); // Reference to the DOM element

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const handleAnimationEnd = () => {
      setIsHovered(false); // Reset the hover state after animation ends
    };

    // Add event listener for the animation end
    logoElement.addEventListener("animationend", handleAnimationEnd);

    // Cleanup function to remove event listener
    return () => {
      logoElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount
  return (
    <>
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
          <img src="/tech-stack/html.svg"></img>
          <img src="/tech-stack/css.svg"></img>

          <img
            src="./tech-stack/react.svg"
            className={`react-logo ${isHovered ? "animate-react-logo" : ""}`}
            onMouseEnter={handleMouseEnter}
            ref={logoRef} // Attach the ref to the element
          ></img>
          <img src="/tech-stack/next-js.svg"></img>
          <img src="/tech-stack/photoshop.svg"></img>
          <img src="/tech-stack/figma.svg"></img>
          <img src="/tech-stack/vscode.svg"></img>
        </div>
        <Alert variant="outlined" severity="info" style={{ marginTop: "3em" }}>
          This page is under construction. We will update soon.
        </Alert>
      </div>
    </>
  );
}

export default App;
