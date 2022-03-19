import React, { useState } from "react";
import "./styles/Switch.css";

export default function Switch() {
  const [theme, setTheme] = useState(0);
  const positions = ["left", "center", "right"];
  let root = document.documentElement;
  const themeProperties = [
    "--main-bg",
    "--keypad-bg",
    "--screen-bg",
    "--key-bg-1",
    "--key-shadow-1",
    "--key-bg-2",
    "--key-shadow-2",
    "--key-bg-3",
    "--key-shadow-3",
    "--text-1",
    "--text-2",
    "--text-3",
    "--text-4",
  ];
  const themeColors1 = [
    "#3b4664",
    "#252d44",
    "#182034",
    "#637097",
    "#404e72",
    "#d03f2f",
    "#93261a",
    "#eae3dc",
    "#b4a597",
    "#ffffff",
    "#44474f",
    "#ffffff",
    "#ffffff",
  ];

  const themeColors2 = [
    "#e6e6e6",
    "#d1cccc",
    "#ededed",
    "#377f86",
    "#1b5f65",
    "#ca5502",
    "#893901",
    "#e5e4e1",
    "#a69d91",
    "#44474f",
    "#44474f",
    "#ffffff",
    "#ffffff",
  ];

  const themeColors3 = [
    "#17062a",
    "#1e0836",
    "#1e0836",

    "#56077c",
    "#bf16f5",
    "#00decf",
    "#6ff8f0",
    "#331b4f",
    "#891c9d",
    "#f9e32d",
    "#f9e32d",
    "#ffffff",
    "#1e1d2d",
  ];

  const changeTheme = () => {
    if (theme === 0) {
      themeProperties.forEach((property, index) => {
        root.style.setProperty(property, themeColors2[index]);
      });
    } else if (theme === 1) {
      themeProperties.forEach((property, index) => {
        root.style.setProperty(property, themeColors3[index]);
      });
    } else if (theme === 2) {
      themeProperties.forEach((property, index) => {
        root.style.setProperty(property, themeColors1[index]);
      });
    }
  };

  const toggleSwitch = () => {
    if (theme === 2) {
      setTheme(0);
    } else {
      setTheme(theme + 1);
    }
  };

  const handleClick = () => {
    toggleSwitch();
    changeTheme();
  };

  function SwitchLabel({ themeNumber }) {
    const selectTheme = (num) => {
      if (num === 0) {
        setTheme(0);
        themeProperties.forEach((property, index) => {
          root.style.setProperty(property, themeColors1[index]);
        });
      } else if (num === 1) {
        setTheme(1);
        themeProperties.forEach((property, index) => {
          root.style.setProperty(property, themeColors2[index]);
        });
      } else if (num === 2) {
        setTheme(2);
        themeProperties.forEach((property, index) => {
          root.style.setProperty(property, themeColors3[index]);
        });
      }
    };

    return (
      <h1 className="label" onClick={() => selectTheme(themeNumber)}>
        {themeNumber + 1}
      </h1>
    );
  }

  return (
    <div className="switch">
      <div className="switch-labels">
        <SwitchLabel themeNumber={0} />
        <SwitchLabel themeNumber={1} />
        <SwitchLabel themeNumber={2} />
      </div>
      <div className="switch-box" onClick={handleClick}>
        <div className={`switch-handle ${positions[theme]}`}></div>
      </div>
    </div>
  );
}
