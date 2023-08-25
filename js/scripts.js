// Business Logic

// Pizza Constructor----

function Pizza(size, toppings) {
	this.size = size;
	this.toppings = toppings;
}

Pizza.prototype.calcPrice = function() {

  let toppingsPrice = .50;
  return toppingsPrice;
  }