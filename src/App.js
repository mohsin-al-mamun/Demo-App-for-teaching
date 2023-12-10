import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { useEffect } from "react";

function App() {
  const [state, setState] = useState("posts");
  const [data, setData] = useState([]);

  const handleState = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [state]);

  console.log("The current state is", state);
  console.log("This is a random line");
  console.log("MMMMMMMMMMMMMMM", data);
  return (
    <div id="container">
      <button className="btn" value="posts" onClick={handleState}>
        Post
      </button>
      <button className="btn" value="comments" onClick={handleState}>
        Comments
      </button>
      <button className="btn" value="users" onClick={handleState}>
        Users
      </button>
      <div> {state} is Clicked!! </div>
    </div>
  );
}

export default App;
