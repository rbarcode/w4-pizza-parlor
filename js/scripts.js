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

window.addEventListener("load", submit);
// window.addEventListener("reset", resubmit);


function submit() {
  const form = document.getElementById("pizza-order");
  form.addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();

  let pizzaSize;
  let pSize = document.getElementsByName("size-selection");
  for (i = 0; i < pSize.length; i++) {
    if (pSize[i].checked) {
      pizzaSize = pSize[i].value;
    }
  }

  let selectedToppings = document.querySelectorAll(".toppings:checked");
  let toppingsArray = [];
  selectedToppings.forEach(function (element) {
    toppingsArray.push(element.value);
  });

  let newPizza = new Pizza(pizzaSize, toppingsArray);
  console.log(newPizza);

  newPizza.calcPrice();
  console.log(newPizza.calcPrice());
}

// function resubmit() {

//   if (document.getElementById("submit-button").disabled === true) {
//     const p = document.getElementById("new-p");
//     p.remove();
//   }

//   document.getElementById("submit-button").disabled = false;
// }