import React from "react";
import "./styles/Key.css";

export default function Key(props) {
  return (
    <div
      className={`key ${props.keyColor} ${props.keySize} ${props.keyText}`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <p className="key-num">{props.value}</p>
    </div>
  );
}
