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

// Keyboard Event
// Listen for the keys being pressed and displays them
document.getElementById("keyInput").addEventListener("keydown", function(event) {
    document.getElementById("keyOutput").innerHTML = "You entered key: " + event.key;
});

// Form Event
// Takes input from the user and displays along with status. If status changes, a different text is shown
document.getElementById("myForm").addEventListener('submit', function (event) {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const status = document.getElementById('status');
    const formOutput = document.getElementById('formOutput'); 

    event.preventDefault(); // Form is not submitted
    formOutput.innerHTML = `User: ${firstName.value} ${lastName.value}, Status: ${status.value}`; 
});