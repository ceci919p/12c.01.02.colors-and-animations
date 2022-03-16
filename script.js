"use strict";

//scroll animation added from the start

window.addEventListener("scroll", reveal);

//waapi animation on header_graphic

const pulseProperties = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "linear",
};

const pulseKeyframes = [
  {
    transform: "scale(1)",
  },
  {
    transform: "scale(1.1)",
  },
];

const circle = document.querySelector(".header_graphics");
const circleAnimation = circle.animate(pulseKeyframes, pulseProperties);

//scroll animation --> how to I do this with waapi?

function reveal() {
  //find everything with the class .reveal
  let reveals = document.querySelectorAll(".reveal");

  //the for statement creates a loop that consists of three optional expressions,
  //enclosed in parenthess and separated by semicolons
  //followed by a statement (usually a block statement) to be executed in the loop
  //block statement = used to group zero or more statements
  //block is delimited by a pair of curly brackets and may optionally be labelled

  //for([initialization]; [condition]; [final-expression];)
  //initialization: an expression or variable declaration evaluated once before the loop begins
  //condition: an expression to be evaluated before each loop iteration, if true statement is executed
  //if omitted (undladt) the condition always evaluates to true
  //if false execution skips to the first expression following the for construct

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//dark theme and light theme function

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};
// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
