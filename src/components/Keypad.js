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
    <div className="keypad">
      {VALUES.map((value, index) => {
        switch (value) {
          case "DEL":
            return (
              <Key
                key={index}
                value={value}
                keyColor="key--blue"
                keySize="key--small"
                keyText="key--text__small"
                handleClick={() => {
                  props.deleteFromDisplay();
                }}
              />
            );
          case "RESET":
            return (
              <Key
                key={index}
                value={value}
                keyColor="key--blue"
                keySize="key--large"
                keyText="key--text__small"
                handleClick={() => {
                  props.resetDisplay();
                }}
              />
            );

          case "=":
            return (
              <Key
                key={index}
                value={value}
                keyColor="key--red"
                keySize="key--large"
                handleClick={() => {
                  props.calculate();
                }}
              />
            );

          default:
            return (
              <Key
                key={index}
                value={value}
                keyColor="key--white"
                handleClick={() => {
                  props.addToDisplay(value);
                }}
              />
            );
        }
      })}
    </div>
  );
}
