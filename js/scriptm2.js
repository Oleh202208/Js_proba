"use Strict";
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//   3

// function checkStorage(available, ordered) {
  // Change code below this line

  // if (ordered === 0) {
  //   return "Your order is empty!";
  // } if (ordered > available) {
  //  return "Your order is too large, not enough goods in stock!";
  // } 
  //     return "The order is accepted, our manager will contact you";


  // return
  // Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 5

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits.length - 1;
// console.log(fruits[lastElement]);

// 7

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// // console.log(fruits.length);
// console.log(fruitsArrayLength);

// 8

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(fruits[lastElementIndex ]);

// 9

// function getExtremeElements(array) {
//   // Change code below this line

// return [array[0], 
// array[array.length-1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// // 10 
// function splitMessage(message, delimiter) {
//   let words;
  
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// 11

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

// let words;
 
//  // Change code below this line
//  words = message.split(" ").length * pricePerWord;
//  // Change code above this line
//  return words;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13


// function slugify(title) {
//   // Change code below this line

//   // Change code below this line
// const slug = title.toLowerCase().split(" ").join("-");


//   // Change code above this line
//   return slug;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

