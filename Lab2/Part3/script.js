var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define the coordinates for the smaller triangle
var xA = 100,
  yA = 201;
var xB = 40,
  yB = 200;
var xC = 100,
  yC = 30;

// Fill the triangle with red color
ctx.beginPath();
ctx.moveTo(xA, yA); // A
ctx.lineTo(xB, yB); // B
ctx.lineTo(xC, yC); // C
ctx.closePath();
ctx.fillStyle = "red"; // Fill color for the triangle
ctx.fill();

// Write labels for the mirrored triangle
ctx.font = "12px Arial";
ctx.fillStyle = "black";
ctx.fillText("a", xA - 35, yA + 15); // Label A beside line AB
ctx.fillText("b", xB + 70, yB - 70); // Label B beside line BC
ctx.fillText("c", xC - 50, yC + 100); // Label C beside line AC

// Write the sentence "According to Pythagoras' Theorem" below the triangle, aligned left
ctx.font = "bold 16px Arial";
ctx.fillStyle = "black";
ctx.fillText("according to pythagoras' theorem", 10, 280);

// Write the formula with square roots below the triangle, aligned left
ctx.font = "italic 20px Arial";
ctx.fillStyle = "red";
ctx.fillText("c = √(a² + b²)", 10, 310);
