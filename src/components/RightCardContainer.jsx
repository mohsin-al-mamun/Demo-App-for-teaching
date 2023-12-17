import React from "react";
import "../App.css";
import Card from "./Card";

import { useContext } from "react";
import { Mycontext } from "../App";

export default function RightCardContainer() {
  const data = useContext(Mycontext);
  return (
    <div id="right-container">
      <Card name={data[1].name} designation={data[1].designation} />
    </div>
  );
}
