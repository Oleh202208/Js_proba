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

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// if(pricePerDroid * orderedQuantity > customerCredits) {
//   message = `Insufficient funds!`;
// } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left.`;
// }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// // 20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered === 0){
//   message = `There are no products in the order!`;
// } else if(ordered > available){
//   message = `Your order is too large, there are not enough items in stock!`;
// } else {
//   message = `The order is accepted, our manager will contact you`;
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // 21

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// 22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// 23


//  function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line
//     const isNotInRange = !isInRange;
//     return isNotInRange;
//   }
//   console.log(isNumberNotInRange(10, 30, 17));
//   console.log(isNumberNotInRange(10, 30, 5));
//   console.log(isNumberNotInRange(20, 50, 24));
//   console.log(isNumberNotInRange(20, 50, 76));

  // 24

//   function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//     if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT; 
// }
//   if(totalSpent < 50000 && totalSpent >= 20000){
//     discount = SILVER_DISCOUNT;
//   }
//   if(totalSpent < 20000 && totalSpent >= 5000){
//     discount = BRONZE_DISCOUNT;
//   }
//   if(totalSpent < 5000){
//     discount = BASE_DISCOUNT;
//     }
//     // Change code above this line
//     return discount;
//   }
  
//   console.log(getDiscount(137000));
//   console.log(getDiscount(46900));
//   console.log(getDiscount(8250));
//   console.log(getDiscount(1300));
//   console.log(getDiscount(5000));
//   console.log(getDiscount(20000));
//   console.log(getDiscount(50000));

// 25 

// приклад з конспекту Виконаємо рефакторинг, замінивши if...else тернарним оператором.
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// 26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case  "starter" : // Change this line
//       price = 0; // Change this line
//       break;

//     case  "professional" :// Change this line
//       price = 20; // Change this line
//       break;

//     case  "organization" :// Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// 28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch(password){
//   case null :
//     message = "Canceled by user!";
//     break;
//     case ADMIN_PASSWORD :
//       message = "Welcome!";
//       break;
//       default :
//       message = "Access denied, wrong password!";
      
// }
  
//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// 29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch(country){
//   case "China" :
//     price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case "Chile" :
//     price = 250;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case "Australia" :
//     price = 170;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case "Jamaica" :
//     price = 120;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     default :
//     message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));



// 30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// 31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic [0];
// const lastElement = courseTopic [courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// 32
// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));


// 33

// function formatMessage(message, maxLength) {
//   let result;
//   if(message.length > maxLength){
//     result = message.slice(0,maxLength) + "...";
//   }else {
//     result = message;
//   }
//   // Change code below this line
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Curabitur ligula sapien", 20));
// console.log(formatMessage("Curabitur ligula sapien", 30));
// console.log(formatMessage("Curabitur ligula sapien", 15));
// console.log(formatMessage("Curabitur ligula sapien", 41));

// 34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// 35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//    return result;
//  }
 
//  console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

// 36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if(message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")){
//     result = true;
//   } else{
//     result = false;
//   }
// // const result = fullName.includes(name);
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));




