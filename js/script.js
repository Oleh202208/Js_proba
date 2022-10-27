"use Strict";
// const productName = "Droid";
// const pricePerItem = 2000;

// let productName = "Droid";
// let pricePerItem = 2000;

// pricePerItem = 3500;
// productName = "Repair droid";

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;


// const productName = "Droid";
// const pricePerItem = 3500;
// const message = "You picked Droid, price per item is 3500 credits";


// function sayHi() {
//   console.log("Hello, this is my first function!")
// }
// sayHi();


function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = (orderedQuantity * pricePerItem) ;

  // Change code above this line
  return totalPrice;
};

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 350));
console.log(calculateTotalPrice(12, 70));