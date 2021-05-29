import React from "react";
import "./styles/Screen.css";

export default function Screen(props) {
  return (
    <div className="screen">
      <h1 className="screen-text">{props.display}</h1>
    </div>
  );
}
