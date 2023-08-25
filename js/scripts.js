// Business Logic

// Pizza Constructor----

function Pizza(size, toppings = []) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calcPrice = function () {
  let basePrice;
  let toppingsPrice = .50;
  let costOfToppings = this.toppings.length * toppingsPrice;

  switch (this.size) {
    case ("Large"):
      basePrice = 12.50;
      break;
    case ("Medium"):
      basePrice = 10;
      break;
    case ("Small"):
      basePrice = 7.50;
      break;
  }

  let finalPrice = basePrice + costOfToppings;
  return finalPrice;
}

// UI Logic

window.addEventListener("load", userActions);
// window.addEventListener("reset", resubmit);

function userActions() {
  submit();
  click();
}

function submit() {
  const form = document.getElementById("pizza-order");
  form.addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();

}

function click() {
  const div = document.getElementById("click-size-selection");
  div.addEventListener("click", createNewOrder);
  // const delButton = document.querySelector("button.delete");
  // delButton.addEventListener("click", handleDelete);
}

function createNewOrder() {
  let pizzaSize;

  if (event.target.value === "small") {
    pizzaSize = "Small";
    // console.log("Small was selected");
  } else if (event.target.value === "medium") {
    pizzaSize = "Medium";
    // console.log("Medium was selected");
  } else if (event.target.value === "large") {
    pizzaSize = "Large";
    // console.log("Large was selected");
  }

  // console.log("This was the size that was selected :" + pizzaSize);
  // let newPizza = new Pizza(pizzaSize);
  // return newPizza;
}


// function resubmit() {

//   if (document.getElementById("submit-button").disabled === true) {
//     const p = document.getElementById("new-p");
//     p.remove();
//   }

//   document.getElementById("submit-button").disabled = false;
// }