import React from "react";
import Switch from "./Switch";
import "./styles/Header.css";

export default function Header() {
  return (
    <div class="header flex">
      <h1 class="header-text">calc</h1>
      <div class="test">
        <h1 id="theme">THEME</h1>
        <Switch></Switch>
      </div>
    </div>
  );
}
