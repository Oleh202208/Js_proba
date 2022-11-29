// // Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();

// 11

// class Car {
//   #brand;
//   model;
//   price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand() {
//   return this.#brand;
// }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
 
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))

// 17
// class Car {
//   static #MAX_PRICE = 50000;
// static checkPrice (price) {
//   if(price > Car.#MAX_PRICE ){
//     return "Error! Price exceeds the maximum";
//   }
//   return "Success! Price is within acceptable limits"
// }
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

// 20===
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// blacklistedEmails = [];
//  blacklist(email){
//    this.blacklistedEmails.push(email);
//  }
//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// const obj = {
//   name: `user Name`,
//   info: {
//     age: 32,
//     nickName: `Petro`,
//     getnickName () {
//       console.log(this.nickName)
//     }
//   },
//   getName() {
//     console.log(this.name, this.age);
//   }
// }
// obj.info.getnickName()

// obj.getName()

// const user = {
//   name: `Test user`,
//   age: 18,
//   metod: obj.getName

// }
// user.metod()

// const user2 = {
//   name: `Okun`,
//   age: `Молюск`,
//   fish: obj.getName
// }
// user2.fish()

// const arrow = () => {
//   console.log(this)
// };
// const obj = {
//   name: `userName`,
//   MyThis: this,
//   getname: () => {
// console.log(`in arrow function`, this.name);
//   }

// }
// obj.getname();
// console.log(`name`, name);
// console.log(obj.MyThis);

// 'use strict'

// function foo () {
// console.log(`declaration`, this);
// }
// foo()
// const expression = function () {
//   console.log(`expression`, this);
// }
// expression()

// const arrow = () => {
//   console.log(`arrow`, this)
// }
// arrow()



const objA = {
  name: `User A`,
    getName () {
      console.log(this.name)
    }
  }

const objB = {
  name: `User B`,
  }


const objC = {
  name: `User C`,
  }