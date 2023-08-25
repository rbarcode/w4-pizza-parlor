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
    case ("large"):
      basePrice = 12.50;
      break;
    case ("medium"):
      basePrice = 10;
      break;
    case ("small"):
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

function createNewOrder(event) {
  let pizzaSize = event.target.value;

  console.log("This was the size that was selected: " + pizzaSize);
  let newPizza = new Pizza(pizzaSize);
  console.log(newPizza);
  return newPizza;
}


// function resubmit() {

//   if (document.getElementById("submit-button").disabled === true) {
//     const p = document.getElementById("new-p");
//     p.remove();
//   }

//   document.getElementById("submit-button").disabled = false;
// }