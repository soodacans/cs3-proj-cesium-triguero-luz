// When the user chooses to exit, this will close the window
function exitGame() {
  // Close the window if allowed by the browser
  // This only works in the code preview. It does not work in the live site due to browser restriction
  if (window.confirm("Are you sure you want to leave?")) {
    window.close();
  } else {
    console.log("Leave canceled.");
  }
}

// When the user chooses to start the game, this will bring them to the apron webpage
function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

// Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
  // Show dessert options
  window.location.href = 'dessertchoice.html';
}

// Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}

// CAKE

// If the user chooses cake, they will choose a shape, then they will be directed to the next webpage to pick a flavor
function selectShape(shape) {
  window.location.href = 'cakeflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectFlavor(flavor) {
  window.location.href = 'caketoppings.html';
}

// After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectTopping(topping) {
  window.location.href = 'finish.html';
}

// ICE CREAM

// If the user chooses icecream, they will choose a container, then they will be directed to the next webpage to pick a flavor
function selectCont(cont) {
  localStorage.setItem('container', cont);  // Store container choice
  window.location.href = 'icecreamflavor.html';
}

// After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectICFlavor(flavor) {
  localStorage.setItem('flavor', flavor);  // Store flavor choice
  window.location.href = 'icecreamtopping.html';
}

// After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectICTopping(topping) {
  localStorage.setItem('topping', topping);  // Store topping choice
  window.location.href = 'finish.html';
}

// When the page is loaded, it retrieves the stored values from localStorage and calls the appropriate function
window.onload = function() {
  // Retrieve user choices from localStorage
  let cont = localStorage.getItem("container");
  let flavor = localStorage.getItem("flavor");
  let topping = localStorage.getItem("topping");

  // Check if the choices are available HI 
  if (cont && flavor && topping) {
    displayFinalIcecream(cont, flavor, topping);
  } else {
    document.getElementById("final-image").src = "https://via.placeholder.com/300x300.png";  // Default image
  }
};

// Will use user input from the choices to determine the final ICECREAM img to be displayed 
function displayFinalIcecream(cont, flavor, topping) {
  if (cont === 'cup' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-cherry.png?v=1738757020723";
  } else if (cont === 'cone' && flavor === 'chocolate' && topping === 'sprinkles') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-sprinkles.png?v=1738756987378";
  } else {
    document.getElementById("final-image").src = "https://via.placeholder.com/300x300.png";  // Default image for unrecognized combinations
  }
}

