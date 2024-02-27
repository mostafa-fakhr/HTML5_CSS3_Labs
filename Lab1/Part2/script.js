// Select all input elements within elements IN class "inputContainer"
const colorInputs = document.querySelectorAll(".inputContainer input");

// Select the h1 element
const text = document.querySelector("h1");

// Declare variables to store RGB and alpha
let r;
let g;
let b;
let alpha;

// Event listener for red
colorInputs[0].addEventListener("input", function () {
  r = colorInputs[0].value;
  console.log(r);
  setColor(); // Update the text color
});

// Event listener for green
colorInputs[1].addEventListener("input", function () {
  g = colorInputs[1].value;
  console.log(g);
  setColor(); // Update the text color
});

// Event listener for blue
colorInputs[2].addEventListener("input", function () {
  b = colorInputs[2].value;
  console.log(b);
  setColor(); // Update the text color
});

// Event listener for changes in alpha
colorInputs[3].addEventListener("input", () => {
  // Scale the alpha value from the input range to the range [0, 1]
  alpha = scaleValue(colorInputs[3].value, 0, 10000, 0, 1);
  console.log(alpha);
  setColor(); // Update the text color
});

// Function to set the text color based on RGB and alpha values
function setColor() {
  text.style.color = `rgb(${r},${g},${b},${alpha})`;
}

// Function to scale a value from one range to another
function scaleValue(value, fromMin, fromMax, toMin, toMax) {
  const ratio = (toMax - toMin) / (fromMax - fromMin);
  return (value - fromMin) * ratio + toMin;
}
