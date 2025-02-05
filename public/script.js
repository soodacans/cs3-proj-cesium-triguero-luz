//When the user chooses to exit, this will close the window
function exitGame() {
  // Close the window if allowed by the browser
  // This only works in the code preview. It does not work in the live site due to browser restriction
  if (window.confirm("Are you sure you want to leave?")) {
    window.close();
  } else {
    console.log("Leave canceled.");
  }
}


//When the user chooses to start the game, this will bring them to the apron webpage
function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

//Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
// Show dessert options
  window.location.href = 'dessertchoice.html';
}

//Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}

//CAKE

//If the user chooses cake, they will choose a shape, then they will be directed to the next webpage to pick a flavor
function selectShape(shape) {
  if (shape === 'square') {
    window.location.href = 'cakeflavor.html';
  } else if (shape === 'heart') {
    window.location.href = 'cakeflavor.html';
  } else if (shape === 'circle') {
    window.location.href = 'cakeflavor.html';
  }
}

//After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectFlavor(flavor) {
  if (flavor === 'vanilla') {
    window.location.href = 'caketoppings.html';
  } else if (flavor === 'strawberry') {
    window.location.href = 'caketoppings.html';
  } else if (flavor === 'chocolate') {
    window.location.href = 'caketoppings.html';
  }
}


//After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectTopping(topping) {
  if (topping === 'strawberry') {
    window.location.href = 'finish.html';
  } else if (topping === 'sprinkles') {
    window.location.href = 'finish.html';
  } else if (topping === 'cherry') {
    window.location.href = 'finish.html';
  }
}

//ICE CREAM

//If the user chooses icecream, they will choose a container, then they will be directed to the next webpage to pick a flavor
function selectCont(cont) {
  localStorage.setItem('container', cont)
  if (cont === 'cup') {
    window.location.href = 'icecreamflavor.html';
  } else if (cont === 'cone') {
    window.location.href = 'icecreamflavor.html';
  }
}

//After the user chooses a flavor, they will be directed to the next webpage to pick a topping
function selectICFlavor(flavor) {
  localStorage.setItem('flavor', flavor)
  if (flavor === 'strawberry') {
    window.location.href = 'icecreamtopping.html';
  } else if (flavor === 'vanilla') {
    window.location.href = 'icecreamtopping.html';
  } else if (flavor === 'chocolate') {
    window.location.href = 'icecreamtopping.html';
  }
}

//After the user picks a topping, they will be directed to the finish page where their final decorated sweet treat will be displayed
function selectICTopping(topping) {
  localStorage.setItem('topping', topping)
  if (topping === 'cherry') {
    window.location.href = 'finish.html';
  } else if (topping === 'sprinkles') {
    window.location.href = 'finish.html';
  } else if (topping === 'marshmallow') {
    window.location.href = 'finish.html';
  }
}

// Determines the function to run to display the final image based on the dessert choice
function whichDessert(dessert, cont, flavor, topping) {
  if (dessert === 'cake') {
    displayFinalCake();
  } else if (dessert === 'icecream') {
    displayFinalIcecream(cont, flavor, topping);
  }
}

// Will use user input from the choices to determine the final ICECREAM img to be displayed 
function displayFinalIcecream(cont, flavor, topping) {
  // Check all conditions using AND (&&) operator
  if (cont === 'cup' && flavor === 'strawberry' && topping === 'cherry') {
    document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cup-strawberry-cherry.png?v=1738757020723";
  }
  // You can add more conditions for other combinations
  //else if (cont === 'cone' && flavor === 'chocolate' && topping === 'sprinkles') {
    //document.getElementById("final-image").src = "https://cdn.glitch.global/5c7f8dc4-a8ab-446f-94bb-7ca841fad583/cone-chocolate-sprinkles.png?v=1738757020723";
  
  // Add more conditions here as needed
}
