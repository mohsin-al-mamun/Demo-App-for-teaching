import React from "react";
import "./LongText.css";
import { useState } from "react";

const text =
  "React is a very popular framework today, and rightfully so. Once you are comfortable with it, the experience of writing a web application becomes downright enjoyable. The community of React developers is vibrant. The pace of change in the framework is fast (maybe a little too fast at times) but well supported by Facebook and the open source community. Most importantly, it allows you to focus on simple pieces of functionality that can easily be composed and reused throughout your application.";

export default function LongText() {
  const [view, setView] = useState("less");

  const handleText = () => {
    if (view === "less") {
      setView("details");
    } else {
      setView("less");
    }
  };
  return (
    <div id="textContainer">
      <div id="textTitle"> React , The famous library.</div>
      <div id="text">
        {view === "less" ? text.slice(0, 150) : text}
        ....
        <button onClick={handleText}>
          {view === "less" ? "See More" : "See less"}
        </button>
      </div>
      {/* <div id="text">
        {text}
        <button> See more</button>
      </div> */}
    </div>
  );
}

// useState("less") ------>  ["less", function which can modify the first value]
//              let [view, setView] = ["value" , "fn"]
//                        let [husband, wife]= ["Mohsin", "Ritu", "Imran"]

//  <div id = {view === "less"? "dark": "light"}  ></div>
