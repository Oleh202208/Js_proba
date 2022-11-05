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

// 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);;
// const lastThreeEls = fruits.slice(-3);;
// console.log(nonExtremeEls);

// 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// const lastmakeArray = firstArray.concat(secondArray);

// if(lastmakeArray.length > maxLength) {
// return lastmakeArray, lastmakeArray.slice(0, maxLength);
// } 
//   return lastmakeArray;
// // console.log(fictmakeArray);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// 17

// function calculateTotal(number) {
  
//   let sumNumbers = 0;
   
//  for(let i = 1; i <= number; i += 1) {
//  sumNumbers += i;
//  }
//    return sumNumbers;
//  }
//  console.log(calculateTotal(1));
//  console.log(calculateTotal(3));
//  console.log(calculateTotal(7));
//  console.log(calculateTotal(18));
//  console.log(calculateTotal(24));
//  console.log(calculateTotal());

// //  19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i+=1) {
//   total = total + order[i];
// }
//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21

// function findLongestWord(string) {
//   // Change code below this line
// let word = string.split(' ');
// let longestWord = word[0];
// for (let i = 0; i < word.length; i += 1) {
  
//   if (word[i].length > longestWord.length) {
//     longestWord = word[i];
  
//   }
 
// }

//   // Change code above this line
//   return longestWord;
// }
// console.log(("The quick brown fox jumped over the lazy dog"));
// console.log(("Google do a roll"));
// console.log(("May the force be with you"));

// 22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line 
  for(let i = min;  i <= max; i++){
    numbers.push(i);
  }
    

  // Change code above this line
  return numbers;
}
