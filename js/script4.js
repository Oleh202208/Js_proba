
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

// 33
// const isAnyUserActive = users => {
//   return users.some(({isActive}) => isActive)
// };

// 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(playtimes)
// console.log(totalPlayTime)
// console.log(averagePlayTime)

// 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame)


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0)
  
// };
// console.log(getTotalFriendCount)



// 38

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates)
// console.log(alphabeticalAuthors)

// 40

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort(
//   (firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = [...books].sort(
//   (firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating);
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating);
//   console.log(sortedByAuthorName, sortedByReversedAuthorName, sortedByAscendingRating, sortedByDescentingRating)

// 42 
// const sortByAscendingBalance = users => {
//   return  [...users].sort(
//    (firstUser, secondUser) => firstUser.balance - secondUser.balance);
//  };

// 43

// const sortByDescendingFriendCount = users => {
//   return  [...users].sort(
// (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// };

// 44
// const sortByName = users => {
//   return [...users].sort(
//     (firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
//   };

// 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books.filter(books => books.rating > 8)
//   .map(books => books.author)
// .sort((a, b) => a.localeCompare(b));
// console.log(names)

// 47

// const getSortedFriends = users => {
//   return users.flatMap(users => users.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b))
//   };
  
// // 48
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(users => users.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0)    
//   };