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
  completeOrder();

  // let selectedToppings = document.querySelectorAll(".toppings:checked");
  // let toppingsArray = [];
  // selectedToppings.forEach(function (element) {
  //   toppingsArray.push(element.value);
  // });
  // // let sizeOfPizza = returnPizzaSize();
  // let newPizza = new Pizza(returnPizzaSize(), toppingsArray);
  // console.log(newPizza);


  // if (toppingsArray.length === 0) {
  //   console.log("No toppings selected");
  // } else {
  //   console.log(toppingsArray);
  // }

}


function completeOrder (psize) {
  let sizeOfPizza = psize;
  let newPizza = new Pizza(sizeOfPizza);
  let selectedToppings = document.querySelectorAll(".toppings:checked");
  let toppingsArray = [];
  selectedToppings.forEach(function (element) {
    toppingsArray.push(element.value);
  });
  newPizza.toppings = toppingsArray;
  console.log(newPizza);
}


function click() {
  const div = document.getElementById("click-size-selection");
  div.addEventListener("click", savePizzaSize);
  // const delButton = document.querySelector("button.delete");
  // delButton.addEventListener("click", handleDelete);
}

function savePizzaSize(event) {
  let pizzaSize = event.target.value;
  completeOrder(pizzaSize)
  // returnPizzaSize(pizzaSize)
  return pizzaSize;
}

// function returnPizzaSize(psize) {
//   let returnedPizzaSize = psize
//   console.log(returnedPizzaSize);
//   return returnedPizzaSize;
// }

// function resubmit() {

//   if (document.getElementById("submit-button").disabled === true) {
//     const p = document.getElementById("new-p");
//     p.remove();
//   }

//   document.getElementById("submit-button").disabled = false;
// }