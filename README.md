# Pizza Parlor

#### By Richard Barbour II

#### Order the best pizza this side of the universe from Fry and the entire gang at Planet Express. Choose a pizza size and any additional toppings before reviewing your order, which includes the total price. 


## Technologies Used

* HTML
* CSS
* JS


## Description

This Futurama-themed webpage allows the customer to begin the process of ordering a pizza by first selecting a size (small, medium or large) using custom radio button tiles. The customer is then permitted to choose any additional toppings before clicking a "Review Order" button. On the review order screen, the customer's selection of pizza size and toppings is displayed along with the total price.

## Setup/Installation Requirements

1. Navigate to https://github.com/rbarcode/w4-pizza-parlor.git in an internet browser.
2. Click on the green “<> Code” on the far right-hand side of the page's main column.
3. On the “Local” tab of the mini-window that opens underneath the “<>Code” button, copy the HTTPS link in the gray bar to your clipboard.
4. In GitBash (or your terminal/shell of your choice/computer), navigate to the directory where you wish to download the project and enter the following prompt (replacing the italicized word with the appropriate link): git clone *url-of-the-repository-copied-in-the-previous-step*
5. Your chosen directory will now contain a folder titled “w3-mr-robogers-neighborhood”.
6. Navigate inside the folder and find the file named "index.html".
7. Double click on the file to open it up in your browser. (The first time you click on the file, you may be prompted by your operating system to choose how you wish to open the file; you can select your browser of choice from any of the browsers you have installed on your computer.)

## Tests


**Describe: Pizza()**

Test #1: "It should return a Pizza object with two properties for toppings and size"  
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);  
Expected Output: Pizza { size: "medium", toppings: ["anchovies", "pineapple"] }   

**Describe: Pizza.prototype.calcPrice()**

Test #2: "It should return the price of one topping."  
Code:  
&ensp; const myPizza = new Pizza("medium", ["anchovies"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 0.5

Test #3: "It should return the price of all toppings."  
Code:  
&ensp; const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 1

Test #4: "It should return the base price of a large pizza."  
Code:  
&ensp; const myPizza = new Pizza("Large", ["anchovies", "pineapple"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 12.50

Test #5: "It should return the base price of a medium pizza."  
Code:  
&ensp; const myPizza = new Pizza("Medium", ["anchovies", "pineapple"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 10  

Test #6: "It should return the base price of a small pizza."  
Code:  
&ensp; const myPizza = new Pizza("Small", ["anchovies", "pineapple"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 7.50

Test #7: "It should return the final price of a medium pizza with two toppings."  
Code:  
&ensp; const myPizza = new Pizza("Medium", ["anchovies", "pineapple"]);  
&ensp; myPizza.calcPrice();  
Expected Output: 11

## Known Bugs

No known bugs.

## License

MIT License

Copyright (c) 2023 Richard Barbour II

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.