import React from "react";
import Key from "./Key";
import "./styles/Keypad.css";

export default function Keypad(props) {
  const VALUES = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "*",
    "RESET",
    "=",
  ];
  return (
    <div class="keypad">
      {VALUES.map((value) => {
        if (value === "DEL") {
          return (
            <Key
              value={value}
              keyColor="key--blue"
              keySize="key--small"
              keyText="key--text__small"
              handleClick={() => {
                props.deleteFromDisplay();
              }}
            ></Key>
          );
        } else if (value === "RESET") {
          return (
            <Key
              value={value}
              keyColor="key--blue"
              keySize="key--large"
              keyText="key--text__small"
              handleClick={() => {
                props.resetDisplay();
              }}
            ></Key>
          );
        } else if (value === "=") {
          return (
            <Key
              value={value}
              keyColor="key--red"
              keySize="key--large"
              handleClick={() => {
                props.calculate();
              }}
            ></Key>
          );
        } else {
          return (
            <Key
              value={value}
              keyColor="key--white"
              handleClick={() => {
                props.addToDisplay(value);
              }}
            ></Key>
          );
        }
      })}
    </div>
  );
}
