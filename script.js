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