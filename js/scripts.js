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
};

// UI Logic

window.addEventListener("load", userAction);

function userAction() {
  submit();
  click();
}

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

  let toppingsArray = [];
  let selectedToppings = document.querySelectorAll(".toppings:checked");
  selectedToppings.forEach(function (element) {
    toppingsArray.push(element.value);
  });

  let newPizza = new Pizza(pizzaSize, toppingsArray);
  let totalPrice = newPizza.calcPrice().toFixed(2);

  displayOrder(pizzaSize, toppingsArray, totalPrice);
}

function displayOrder(size, toppings, price) {
  let sizeSpan = document.getElementById("results-size");
  let toppingsSpan = document.getElementById("results-toppings");
  let priceSpan = document.getElementById("results-price");
  sizeSpan.innerText = size;
  priceSpan.innerText = price;
  if (toppings.length === 0) {
    toppingsSpan.innerText = "You did not choose any toppings."
  } else {
    toppingsSpan.innerText = toppings.toString().replace(/,/g, ", ");
  }

  document.getElementById("order-screen").setAttribute("class", "hidden");
  document.getElementById("review-screen").removeAttribute("class");
}

function click() {
  document.getElementById("start-over").addEventListener("click", startOver);
}

function startOver() {
  document.getElementById("pizza-order").reset();
  document.getElementById("order-screen").removeAttribute("class");
  document.getElementById("review-screen").setAttribute("class", "hidden");
}