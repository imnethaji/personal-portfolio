import "./App.sass";
import Nav from "../components/Nav";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="sub-container">
          <h1>
            <i>
              Hi I&apos;m <span className="hero-text">Nethaji</span>
            </i>
          </h1>
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
              fontSize: "2em",
              display: "inline-block",
              marginBottom: "1em",
            }}
          />
        </div>
      </div>
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
      <footer>
        <div className="footer-container">
          <div className="border"></div>
          <div className="social">
            <h4>Connect with me on</h4>
            <div className="logos">
              <a href="https://www.instagram.com/im_nethaji/" target="_blank">
                <img className="social-logo" src="/insta-logo.svg" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/imnethaji/" target="_blank">
                <img className="social-logo" src="/linked-in-logo.svg" alt="" />
              </a>
              <a href="https://github.com/imnethaji" target="_blank">
                <img className="social-logo" src="/github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
