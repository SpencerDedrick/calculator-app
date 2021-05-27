import React from "react";
import "./styles/Screen.css";

export default function Screen(props) {
  return (
    <div class="screen">
      <h1 class="screen-text">{props.display}</h1>
    </div>
  );
}
