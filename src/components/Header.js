import React from "react";
import Switch from "./Switch";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header flex">
      <h1 className="header-text">calc</h1>
      <div className="test">
        <h1 id="theme">THEME</h1>
        <Switch></Switch>
      </div>
    </div>
  );
}
