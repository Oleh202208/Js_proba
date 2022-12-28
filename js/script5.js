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



// const objA = {
//   name: `User A`,
//     getName (age, city) {
//       console.log(`getName`, arguments)
//       console.log(`Hellow my name ${this.name}, I'm yaers ${age},
//        I'm from ${city}.` )
//     }
//   }
// const objB = {
//   name: `User B`,
//   }
// const objC = {
//   name: `User C`,
//   }


// const foo = objA.getName.bind(objB, 19, `Kyiv`);
// console.log(foo)
// foo()
// foo(23, `Lviv`)

// objA.getName()

// const arr = [23, `Odessa`];
//   objA.getName.call(objB, 33, `Lviv`)
//   objA.getName.apply(objC, arr)
//   objA.getName.call(objB, ...arr)


// const chopShop = {
//   stones: [ {
//     name: `Emerald`,
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: `Diamond`,
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: `Sapphire`,
//     price: 1400,
//     quantity: 7
//   },
//   {
//     name: `Ruby`,
//     price: 800,
//     quantity: 2
//   },
// ],
// calcTotalPrice(stoneName) {
// const stone = this.stones.find(({name}) => name.toLocaleLowerCase() === stoneName.toLocaleLowerCase())
// // console.log(stone);
// if(stone){
// const {price, quantity} = stone
// return price * quantity
// }
//   return `Empty`

// },

// };

// console.log(chopShop.calcTotalPrice(`Emerald`));
// console.log(chopShop.calcTotalPrice(`Diamond`));
// console.log(chopShop.calcTotalPrice(`Sapphire`));
// console.log(chopShop.calcTotalPrice(`Ruby`));
// // console.log(chopShop.calcTotalPrice(`Black`));

// const phoneboock = {
//   contacts: [],
//   add(contacts) {
//     const newContact = {
//       list: `defauld`,
//       ...contacts,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return new Date();
//   },
// };

// phoneboock.add({
// name: `Mango`,
// email: `Mango@gmail.com`,
// list: `friends`
// })

// console.log(phoneboock.contacts)

// const calculator = {
// read(a=0, b=0) {
//   if(!isNaN(a) && !isNaN (b)){
//     this.a = Number(a);
//     this.b = Number(b);
//   } else{
//     alert ('Будьласка вкажіть значення a та b')
//   }

// },
// add() {
// return this.a + this.b
// },
// mult(){
//   return this.a * this.b
// }
// };
// calculator.read('12',44);
// console.log(calculator.add());
// console.log(calculator.mult())



// ======= Prototype========

// const arr = [1,2,3,4,5];
// // console.log(arr.map());

// const obj = {
//   name: "User obj"
// }
// console.log(obj);


// function sayHello(name) {
//   console.log(`Hi my name is ${name}, from castom function `);
// }

// String.prototype.qwerty = sayHello;

// const str = "dfdfgds";
// console.log(typeof str)
// str.qwerty('Artem')


// ======= Clas=======

// class User {
//   constructor(name, email, age){
// this.name = name;
// this.email = email;
// this.age = age;
//   }
//   getName(){
//     console.log(this.name)
//   }
// }

// const ObjA = new User ("User A", 'test@gmail.com', 18);
// const ObjB = new User ("User B", 'test@gmail.com', 30)

// console.log('ObjA', ObjA);
// console.log('ObjB', ObjB);



// =============  GAMES X and 0 ============



const content = document.querySelector('.content');

const wins = [ 
[1,2,3],
[4,5,6],
[7,8,9],
[1,5,9],
[3,5,7],
[3,6,9],
[1,4,7],
[2,5,8],
];

const KEY_X = 'keyX';
const KEY_0 = 'key0';
const KEY_PLAYER = 'player';
const KEY_COUNTER = 'counter';
const endGame = 9;
let counter = JSON.parse(localStorage.getItem(KEY_COUNTER)) || 0;
let player = localStorage.getItem(KEY_PLAYER) || 'X';

const stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
const step0 = JSON.parse(localStorage.getItem(KEY_0)) || [];

function autoComplite(){
[...content.children].forEach(item =>{
  const id = Number(item.dataset.id)
  if(stepX.includes(id)){
    item.textContent = 'X';
  }else if(step0.includes(id)){
    item.textContent = '0';
  }
})
console.dir(content);
}


function createMarkup(){
  let markup = '';
  for(let i =1; i<= 9; i += 1) {
    markup += `<div class='item' data-id='${i}'></div>`
  }

  content.innerHTML = markup;
}
createMarkup()
autoComplite()

content.addEventListener('click', onClick);

function onClick(evt) {
  if(!evt.target.classList.contains('item')) {
    return;
  }
  console.log('this', evt.target.textContent);
  if(evt.target.textContent) {
    return;
  }

const currentId = Number( evt.target.dataset.id);
let result = false;
counter+=1;
if(player === 'X') {
  stepX.push(currentId);
  localStorage.setItem(KEY_X, JSON.stringify(stepX))
  result = isWinner(stepX);
}else{
  step0.push(currentId)
  localStorage.setItem(KEY_0, JSON.stringify(step0))
  result = isWinner(step0);
}
evt.target.textContent = player;

if(result) {
  chempion(player);
  return;
}
  if(content === endGame) {
    chempion('RESTART GAME')
    return;
  }
  player = player === 'X' ? '0' : 'X'; 
localStorage.setItem(KEY_PLAYER, player)
localStorage.setItem(KEY_COUNTER, JSON.stringify(counter))
}

function chempion(player) {
  setTimeout(()=> {
    alert(player);
    createMarkup();
    localStorage.clear();
  }, 500)
}

function isWinner(arr) {
return wins.some(item => item.every(id =>arr.includes(id)))
}
