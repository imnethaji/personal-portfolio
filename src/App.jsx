import "./App.sass";
import { Alert } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="container">
        <h1>Hi I&apos;m Nethaji</h1>

        <TypeAnimation
          sequence={[
            "</I'm a Developer>", // Types 'One'
            2000, // Waits 1s
            "</I'm a Photographer>", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "</I'm a Creator>",
            2000, // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            display: "inline-block",
            marginBottom: "3em",
          }}
        />
        <Alert variant="outlined" severity="info">
          This page is under construction. We will update soon.
        </Alert>
      </div>
    </>
  );
}

export default App;
