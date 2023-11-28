import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [parentTheme, setParentTheme] = useState("blue");

  const handleParentTheme = () => {
    if (parentTheme === "blue") {
      setParentTheme("yellow");
    } else {
      setParentTheme("blue");
    }
  };
  return (
    <div id={parentTheme === "blue" ? "container-blue" : "container-yellow"}>
      <Card
        name="Mohsin"
        designation="Software Developer"
        setParentTheme={setParentTheme}
        parentTheme={parentTheme}
      />
      {/* <button id="btn" onClick={handleParentTheme}>
        Change Parent div
      </button> */}
    </div>
  );
}

export default App;
