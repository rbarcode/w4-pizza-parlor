# Pizza Parlor

#### By Richard Barbour II

#### / text to come /  

/ link to come /


## Technologies Used

* HTML
* CSS
* JS


## Description

/ description to come /

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
Code: myPizza.calcPrice();
Expected Output: 0.5

Test #3: "It should return the price of all toppings."
Code: myPizza.calcPrice();
Expected Output: 1


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