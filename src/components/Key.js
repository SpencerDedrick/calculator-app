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
      className={`key ${props.keyColor} ${props.keySize} ${props.keyText}`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <p className="key-num">{props.value}</p>
    </div>
    /* <div
      className={`key ${props.keyColor} ${props.keySize} ${props.keyText}`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <p>{props.value}</p>
    </div> */
  );
}
