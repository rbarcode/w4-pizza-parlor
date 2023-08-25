// Business Logic

// Pizza Constructor----

function Pizza(size, toppings = []) {
	this.size = size;
	this.toppings = toppings;
}

Pizza.prototype.calcPrice = function() {
  let basePrice;
  let toppingsPrice = .50;
  let costOfToppings = this.toppings.length * toppingsPrice;
  if (this.size === "Large") {
    basePrice = 12.50;
  }
  return basePrice;
  }