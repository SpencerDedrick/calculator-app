import React, { useState } from "react";
import "./styles/Calculator.css";
import Screen from "./Screen";
import Header from "./Header";
import Keypad from "./Keypad";
import Footer from "./Footer";

export default function Calculator() {
  let mathfromString = require("math-from-string");

  const [display, setDisplay] = useState("");
  //Removed this calculation state because it's not totally necessary right now
  /* const [calculation, setCalculation] = useState(""); */

  //Adds numbers or operators to the "display" or screen
  const addToDisplay = (input) => {
    if (display === "SYNTAX ERROR") {
      setDisplay(input);
      /* setCalculation(input); */
    } else {
      setDisplay(display + "" + input);
    }
  };

  //uses math-from-string to perform, return, and set the results of the equation on the screen
  const calculate = () => {
    try {
      setDisplay(mathfromString(display));
    } catch (err) {
      setDisplay("SYNTAX ERROR");
    }
  };

  //when pressing the "reset" button the screen will reset to blank
  const resetDisplay = () => {
    setDisplay("");
  };

  //deletes the last number or operator from the display
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
