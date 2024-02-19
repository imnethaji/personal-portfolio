import "./App.sass";
import { Alert } from "@mui/material";

function App() {
  return (
    <>
      <div className="container">
        <h1>&lt;/Hi I&apos;m Nethaji&gt;</h1>
        <Alert variant="outlined" severity="info">
          This page is under construction. We will update soon.
        </Alert>
      </div>
    </>
  );
}

export default App;
