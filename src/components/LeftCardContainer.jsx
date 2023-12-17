import React, { useEffect, useState, createContext } from "react";
import "../App.css";
import Card from "./Card";
import { useContext } from "react";
import { Mycontext } from "../App";

export default function LeftCardContainer() {
  const data = useContext(Mycontext);
  return (
    <div id="left-container">
      <Card name={data[0].name} designation={data[0].designation} />
    </div>
  );
}
