// Business Logic

// Pizza Constructor----

function Pizza(size, toppings) {
	this.size = size;
	this.toppings = toppings;
}

Pizza.prototype.calcPrice = function() {

  let toppingsPrice = .50;
  let costOfToppings = this.toppings.length * toppingsPrice;
  return costOfToppings;
  }