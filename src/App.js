import "./App.css";
import LeftCardContainer from "./components/LeftCardContainer";
import RightCardContainer from "./components/RightCardContainer";
import { createContext } from "react";

const data = [
  { name: "Mohsin", designation: "Software Developer" },
  { name: "Mitu", designation: "Software Engineer" },
];

const Mycontext = createContext(); //  Provider, Consumer , and Aro kisu ...

function App() {
  return (
    <Mycontext.Provider value={data}>
      <div id="container">
        <LeftCardContainer />
        <RightCardContainer />
      </div>
    </Mycontext.Provider>
  );
}

export default App;
export { Mycontext };
