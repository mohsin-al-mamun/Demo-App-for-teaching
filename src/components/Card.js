import { useState, useEffect } from "react";
import "./Card.css";

function Card(props) {
  //  props = {name:"Mohsin", designation:"Software Developer", parentTheme:parentTheme setParentTheme: setParentTheme}

  const [childTheme, setChildTheme] = useState("dark");
  console.log(props);

  const handleChildTheme = () => {
    if (childTheme === "dark") {
      setChildTheme("light");
    } else {
      setChildTheme("dark");
    }

    if (props.parentTheme === "blue") {
      props.setParentTheme("yellow");
    } else {
      props.setParentTheme("blue");
    }
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/post")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // });

  return (
    <div id={childTheme === "dark" ? "center-dark" : "center-light"}>
      <div> {props.name} </div>
      <div>{props.designation}</div>
      <button
        id={childTheme === "dark" ? "btn-light" : "btn-dark"}
        onClick={handleChildTheme}
      >
        Change theme
      </button>
    </div>
  );
}

export default Card;
