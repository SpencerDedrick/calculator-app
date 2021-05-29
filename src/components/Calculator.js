import React, { useState } from "react";
import "./styles/Calculator.css";
import Screen from "./Screen";
import Header from "./Header";
import Keypad from "./Keypad";
import Footer from "./Footer";

export default function Calculator() {
  let mathfromString = require("math-from-string");

  const [display, setDisplay] = useState("");
  /* const [calculation, setCalculation] = useState(""); */

  const addToDisplay = (input) => {
    if (display === "SYNTAX ERROR") {
      setDisplay(input);
      /* setCalculation(input); */
    } else {
      setDisplay(display + "" + input);
    }
  };

  const calculate = () => {
    try {
      setDisplay(mathfromString(display));
    } catch (err) {
      setDisplay("SYNTAX ERROR");
    }
  };

  const resetDisplay = () => {
    setDisplay("");
  };

  const deleteFromDisplay = () => {
    if (display !== "SYNTAX ERROR") {
      try {
        setDisplay(display.slice(0, -1));
      } catch (err) {
        console.log(err);
      }
    } else {
      resetDisplay();
    }
  };
  return (
    <div className="calculator">
      <div className="container">
        <Header></Header>
        <Screen display={display}></Screen>
        <Keypad
          addToDisplay={addToDisplay}
          calculate={calculate}
          resetDisplay={resetDisplay}
          deleteFromDisplay={deleteFromDisplay}
        ></Keypad>
        <Footer></Footer>
      </div>
    </div>
  );
}
