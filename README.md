# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Links

- Live Site URL: [calculator-app](https://calculator-app-sd.netlify.app/)

## My process

This is my first time attempting a Front End Mentor challenge. I opted for the intermediate difficulty calculator app as I have made a calculator app before but not in react, or in with the ability to change themes.

First I prototyped the design in figma to get approximate CSS values. Then I began creating the various components such as the screen, the keypad, and the keys. I think this keypad is one of my first uses of CSS grid in an actual project. I'm excited to continue using it and learn more about it going forward.

After the components were styled I then began to work on the theme changing functionality. When it came to the themes first I needed to create a switch that would the user to toggle between three different themes. At first I wanted to try to use an npm package to handle the switch, but I didn't find one that allowed three different states. I ended up coding a simple switch using CSS transitions for the animations. Overall, I'm pretty happy with the "brute-force" solution I came up with. It was quite tedious to code and I wouldn't want to do add a fourth theme or change the colors on a theme without optimizing or even finding a node package to handle the this process.

Next I began to add the logic to the calculator. Instead of trying to create something to parse the inputs from the user I decided to use a node package that converted strings into math calculations. This solution seems to work fairly well. However, I have the feelling that this could cause issues in the future.

Overall, I'm pretty satisfied with my submission and had a lot of fun coding this app. It was definately a nice refresher on handling state, and passing functions as props as well as passing data from one component to another.

### Built with

- [Front End Mentor](https://www.frontendmentor.io/solutions)
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

This is one of my first times using CSS grid in a project. I can see why it is so popular!

Using CSS variables to handle the theme switching was kind of fun, ableit repetative. I've never created something with a theme change functionality and haven't really used JS to manipulate CSS values like this before.

```css
:root {
  --main-bg: #3b4664;
  --keypad-bg: #252d44;
  --screen-bg: #181f32;
  --key-bg-1: #637097;
  --key-shadow-1: #404e72;
  --key-bg-2: #d03f2f;
  --key-shadow-2: #93261a;
  --key-bg-3: #eae3dc;
  --key-shadow-3: #b4a597;
  --text-1: white;
  --text-2: #44474f;
  --text-3: white;
  --text-4: white;
}
```

Ever since learning how to use map to create multiple components I try to use it as much as possible. I know this isn't perfect, but I'm glad I was able to put this in to practice to create all of those buttons!

```js
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
```

### Continued development

Eventaully I'd like to add my "dice-calculator" functionality to this as a sort of easter egg. I would also like to eventually revisit this project and optimize the theme changing, implement SASS/SCSS, and optimize the logic behind the calculations to make it more bulletproof.

### Useful resources

## Author

- Website - [Spencer Dedrick](https://spencerdedrick.netlify.app/)
- Frontend Mentor - [@SpencerDedrick](https://www.frontendmentor.io/profile/SpencerDedrick)
- LinkedIn - [Spencer Dedrick](https://www.linkedin.com/in/spencer-dedrick/)

## Acknowledgments

This was developed as a solution to a Front End Mentor challenge. I learned about Front End Mentor from Kevin Powell's youtube channel. I highly recommend this channel to anyone looking to develop their front end skills!
