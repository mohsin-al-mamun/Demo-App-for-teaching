import React, { useEffect, useState, createContext } from "react";
import "../App.css";
import Card from "./Card";

export default function LeftCardContainer() {
  let [data, setData] = useState([]);
  let myContext = createContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div id="left-container">
      <Card name={data[0]?.name} email={data[0]?.email} />
    </div>
  );
}
