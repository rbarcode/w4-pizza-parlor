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

window.addEventListener("load", submit);
window.addEventListener("reset", resubmit);

function submit() {
  const form = document.getElementById("talk-to-robot");
  form.addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  
}

function resubmit() {

  if (document.getElementById("submit-button").disabled === true) {
    const p = document.getElementById("new-p");
    p.remove();
  }

  document.getElementById("submit-button").disabled = false;
}