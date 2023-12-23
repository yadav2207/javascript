// // Get the option buttons and the element to change the background color of
// const redButton = document.getElementById("red");
// const greenButton = document.getElementById("green");
// const blueButton = document.getElementById("blue");
// // const myElement = document.getElementById("myElement");

// // Add event listeners to the option buttons
// redButton.addEventListener("click", () => {
//   myElement.style.backgroundColor = "red";
// });

// greenButton.addEventListener("click", () => {
//   myElement.style.backgroundColor = "green";
// });

// blueButton.addEventListener("click", () => {
//   myElement.style.backgroundColor = "blue";
// });

// function changeBackgroundColor() {
//   // Get the body element
//   let body = document.getElementsByTagName("body")[0];

//   // Set the background color to a new value
//   body.style.backgroundColor = "red";

//   let color = document.getElementsByTagName("color")[0]

//   color.style.backgroundColor = "green";
// }

function changeBackgroundColor() {
  // Define an array of possible color values
  var colors = ["red","green","blue","yellow","pink"];

  // Get the body element
  var body = document.getElementsByTagName("body")[0];

  // Set the background color to a random value from the array
  body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

