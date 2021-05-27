import React from "react";
import "./styles/Key.css";

export default function Key(props) {
  /*   const SIZES = ["small", "large"];
  const COLORS = ["white", "red", "blue"];
  let keyColor = "white";
  let keySize = "small";

  const checkKeySize = SIZES.includes(keySize);
  const checkKeyColor = COLORS.includes(keyColor); */

  return (
    <div
      class={`key ${props.keyColor} ${props.keySize} ${props.keyText}`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <h1>{props.value}</h1>
    </div>
  );
}
