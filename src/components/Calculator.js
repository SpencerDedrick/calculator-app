import React, { useState } from "react";
import "./styles/Calculator.css";
import Screen from "./Screen";
import Header from "./Header";
import Keypad from "./Keypad";

export default function Calculator() {
  let mathfromString = require("math-from-string");

  const [display, setDisplay] = useState("");
  const [total, setTotal] = useState(0);
  const [calculation, setCalculation] = useState("");

  const addToDisplay = (input) => {
    setDisplay(display + input);
    setCalculation(display + input);
  };

  const calculate = () => {
    try {
      setTotal(mathfromString(calculation));
      setDisplay(mathfromString(calculation));
    } catch (err) {
      setDisplay("SYNTAX ERROR");
    }
  };

  const resetDisplay = () => {
    setTotal(0);
    setDisplay("");
    setCalculation("");
  };

  const deleteFromDisplay = () => {
    try {
      setDisplay(display.slice(0, -1));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="calculator">
      <div class="container">
        <Header></Header>
        <Screen display={display}></Screen>
        <Keypad
          addToDisplay={addToDisplay}
          calculate={calculate}
          resetDisplay={resetDisplay}
          deleteFromDisplay={deleteFromDisplay}
        ></Keypad>
      </div>
    </div>
  );
}
