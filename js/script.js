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


// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = (orderedQuantity * pricePerItem) ;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 350));
// console.log(calculateTotalPrice(12, 70));

// // 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`



//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >=18;

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// function checkAge(age) {
//   let message;
//   if (age >= 18){
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// } 
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// 17

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(available < ordered){
//   message = `Not enough goods in stock!`;
// } else {
//     message = `Order is processed, our manager will contact you.`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// 18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
if(pricePerDroid * orderedQuantity > customerCredits) {
  message = `Insufficient funds!`;
} else {
  message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left.`;
}
  // Change code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));