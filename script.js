// Mouse Event #1 with arrays 
// Depending on the times the button is clicked, the text goes through an arrya of messages
const messages = ["Hello World!", "Nice to meet you!", "See you later!"];
let clicked = 0; // Initialize a variable to track the clicked state

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = messages[clicked];
  clicked++;
  if (clicked >= messages.length) {
    clicked = 0;
  } 
});

// Mouse Event #2
// Change background colour when mouse hovers over button
const hoverButton = document.getElementById("hoverButton");

hoverButton.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "lightblue";
});

hoverButton.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "transparent";
});