
// 4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for( let nameElem of pizzaPalace.pizzas){
//       if(nameElem === pizzaName){
//         return onSuccess(pizzaName);  
//       }
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`); 
//   },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

//======== методи масиву варіант ==============

// order(pizzaName, onSuccess, onError) {
//   const isRub = this.pizzas.includes(pizzaName)
//   if (isRub) {
//  return onSuccess(pizzaName)
//   }
//   return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
// },
// };


// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// 5


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
  
// orderedItems.forEach (function (orderedItem, index) {
// totalPrice += orderedItem 
// });

//   return totalPrice;
// }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));

  // 6

  // function filterArray(numbers, value) {
  //   const filteredNumbers = [];
   
  // numbers.forEach (function (number, index) {
  //   if(number > value)
  // filteredNumbers.push(number);
  // });
  
  //   return filteredNumbers;
  // }
  // console.log(filterArray([12, 24, 8, 41, 76], 20))

  // 7

  // function getCommonElements(firstArray, secondArray) {
  //   const commonElements = [];
  //   firstArray.forEach (function (firstArrays, index){
  //     if(secondArray.includes(firstArrays)){
  //       commonElements.push(firstArrays);
  //     }
  //   })
  //   return commonElements;
  // }
  // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// 10
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//  orderedItems.forEach(orderedItems => 
//  totalPrice += orderedItems);
//  return totalPrice;
// }

// 11

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//    numbers.forEach(number  => {
//     if(number > value)
//   filteredNumbers.push(number);
//   });
//    return filteredNumbers;
// }
 
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// // 13
// function changeEven(numbers, value) {
 
//   const newNumbers = [];
//   numbers.forEach(numbers => {
//     if(numbers % 2 == 0){
//       newNumbers.push(numbers + value);
     
//     }else {
//        newNumbers.push(numbers);
//     }
    
//   })
//   return newNumbers;
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// // 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((allGenres, index, array) => array.indexOf(allGenres) === index);

// 23
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const newName = users.filter(({age}) => age >= minAge && age < maxAge)
//   return newName
//   };