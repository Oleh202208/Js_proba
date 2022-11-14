// 1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],

//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// 3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = 4;
// const aptDescr = "Spacious apartment in the city center";
// const aptPrice = 2153;
// const aptTags = ["premium", "promoted", "top"];

// // 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// // apartment.location.country = "Jamaica";
// // apartment.location.city = "Kingston";

// // 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

// };

// 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// // Change code below this line
//  for (const key in apartment) {
   
//  }

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//     // keys.push(key);
//   values.push(apartment[key]);

// }

// }

// // 12
// function countProps(object) {
//   let propCount = 0;

// for (const Props in object){
//   if (object.hasOwnProperty(Props)){
//     propCount += 1;
//   }
// }

//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys){
//   // keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(values)

// 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//  const keys = Object.keys(object);
//   for (const key of keys){
//     propCount += 1;
//   }
//   return propCount;
// }

// 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//   // Change code above this line
//   for( const value of values){
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)

// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

// for(const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Engine"))

// 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

// let propertyValues = [];
//   for (let product of products) {
//     const keys = Object.keys(product);
//     if (keys.includes(propName)) {
//       propertyValues.push(product[propName]);
//     }
//   }
// return propertyValues;
// }

// 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let totalPrice = 0;
//   for(let product of products){
//     if(productName === product.name){
//       totalPrice = product.price * product.quantity;
//     }
 
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice("Blaster"))
// console.log(calculateTotalPrice("Radar"))
// console.log(calculateTotalPrice("Droid"))
// console.log(calculateTotalPrice("Grip"))
// console.log(calculateTotalPrice("Scanner"))

// // 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday,today,tomorrow} = highTemperatures;

// //  коментуєм, що було)))
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday,
//        today,
//        tomorrow,
//        icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday: highYesterday,
//        today: highToday,
//        tomorrow: highTomorrow,
//        icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // 24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const {hex,rgb} of colors) {
//   // const {hex,rgb} = colors;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// // 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today:{
//     low:lowToday,
//     high:highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon:tomorrowIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   },
// } = forecast;

// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// 26

// function calculateMeanTemperature(forecast) {
//   // Заміни деструктуризації
//     // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today:{
//       low: todayLow,
//       high: todayHigh,
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh,
//     },
//   } = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
//   console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

// 29

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // застосувати перевизначені налаштування
// const finalSettings = {...defaultSettings, ...overrideSettings};

// 31
// function addOverNum(a, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(a < arg){
//       total += arg;
//     }   
//   }
//  return total;
 
// }
// console.log(addOverNum(14, 32, 6, 13, 19, 8));

// 33

// function findMatches([...args], ...anyArgs) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if(anyArgs.includes(arg)) {
//     matches.push(arg);
//   }
  
// }
// return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//  removeBook(bookName) {
//    return `Deleting book ${bookName}`;
//  },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
    
// },
// };

// 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
// return this.potions.splice(potionIndex, 1);
//   },
// };


// 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(const potion of this.potions)
      if(potion.name === newPotion.name) {
    
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
    return this.potions;
  },
  removePotion(potionName) {
    
    for(const potion of this.potions){
      if(potionName === potion.name){
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);   
      }
    }
      return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for(const potion of this.potions)
      if(oldName === potion.name){
        potion.name = newName
        return this.potions;
      }
  },
};