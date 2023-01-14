// / Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// const camelize = (string, callback) => {
//  return string.split('_').map(callback)
// }
// console.log(camelize("background-color"));

// function firstLeterToUpper(string) {
// return $(string[0].toUpperCase())$[string.slice(1)]
// }



// / Напишіть дві функції
  // makeProduct(назва, ціна, callback) - приймає
  // ім`я і ціну товару, а також функцію callback.
  // Функція створює об'єкт товару, додає йому унікальний
  // ідентифікатор у властивості id і викликає зворотний виклик
  // передаючи йому створений об’єкт.
  // showProduct(product) - callback приймає об'єкт
  // продукта і виводить його в консоль





  // Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2


// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeShef = (shefName) => {
//   return function makeDish (dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }
// }

// const mango = makeShef("Mango");
// mango("apple pie")
// mango("Ice craem")

// const poly = makeShef("Poly");
// poly("apple pie")
// poly("Ice craem")

//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.


// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter


//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// // Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();


// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();


// / Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));


// Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
//   console.log(this.price);
//   console.log(number)
// }


// const laptop = {
//   price: 1500
// }
// showPrice.call(laptop, 1)
// showPrice.apply(laptop, [1])


// ==========

// Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       id: Date.now(),
//       type,
//       amount,
//       date: new Date(),
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(DEPOSIT, amount));
//   },

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     this.balance -= amount;
//     this.transactions.push(this.createTransaction(WITHDRAW, amount));
//   },

//   //Метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає кількість засобів певного типу
//   //транзакції з історії транзакцій
//   getTransactionType(type) {},
// };
// account.deposit(5000);
// console.log(account)



// +++++++++++   Книги=======



// 17.12++++++++++++++=======================

// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ['car.png', 'grass.png', 'avatar.png', 'user.png', 'sea.png', 'water.png', 'bird.png'];
// const baseUrl = {domain: 'domain-name.com'};
// let uploadedFiles = [];

// const resultUploadedFiles = [
//   'domain-name.com/upload/car.png',
//   'domain-name.com/upload/grass.png',
//   'domain-name.com/upload/avatar.png',
//   'domain-name.com/upload/user.png',
//   'domain-name.com/upload/sea.png',
//   'domain-name.com/upload/water.png',
//   'domain-name.com/upload/bird.png'
// ];

// imagesName.forEach(function(imags){
//   const src = `${this.domain}/upload/${imags}`
//   // uploadedFiles.push(src)

// }, baseUrl)
// console.log(uploadedFiles)


// // uploadedFiles = imagesName.map(imags =>  `${baseUrl.domain}/upload/${imags}`)


// uploadedFiles = imagesName.reduce((acc, image)=> [...acc, `${baseUrl.domain}/upload/${image}`],[])
// console.log(uploadedFiles)

//  задача 2

// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const tShirt = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }

// const jeans = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }


// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];


// function addItemToBasket (product){
// const activProduct = basketItems.find(item => item.id === product.id)
// console.log(activProduct)
// if(activProduct){
// return basketItems.map(item => {
//   if(item.id === product.id){
//     return {
//       ...item,
//       count: item.count +1,
//     };
//   }else{
//     return item;
//   }
// })
// }else{
//   return 
// }
// }

// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(jeans);

// total = basketItems.reduce((sum, {count, price})=> sum + count * price, 0)
// console.log(total)

// задача 3


// / Потрібно отримати URL адресу із адресного рядка бразуера.
// // Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const link = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311'
// const url = new URL(link)
// console.log(url);
// const {serch} = url;
// console.log(serch.slice(1));
// const params = serch.slice('&')
// .reduce((acc,string => {
//   console.log(acc)
//   console.log(string)
//   const [key, value] = string.split('=')
//   acc[key] = value;
//   return acc;
// },[]));
// console.log(params);

// задача 4

// // Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]

// function compact (data) {
//   return data.filter(item => item)
//   return data.filter(Boolean)
// }



// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
// {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }
// ];

// function removeFromBasket(id){
// return basketItems.filter(item => item.id !== id);
// }
// console.log(basketItems);
// basketItems = removeFromBasket(29)
// console.log(basketItems);


// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e



// const input = 'Every developer likes to mix kubernetes and javascript';
// function shortSentence (str){
//   const arr = str.spli(' ');
//   arr.map(word => {
//     if(AudioWorkletNode.length < 4) {
// return word;
//     }else{
//       return `${word[0]}${word.length - 2}${word[word.length -1]}`
//     }

//   }).join(' ')
  
// }

// Result
// 'E3y d7r l3s to mix k8s and j8t'



//  Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.


// const input = 'George Raymond Richard Martin';



// Result
// 'GRRM'\

// задача ====

// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = {name: "Bruce", age: 25};
// let jhon = { name: "Jhon", age: 30};
// let maria = { name: "Maria", age: 28};
// //
// let arr = [ bruce, jhon, maria ];

// sortByAge(arr);

// function sortByAge(arr){
//   // arr.sort(({age}, {age: nextAge})=>age - nextAge
//   arr.sort((prev, next)=> prev.age > next.age? -1:1)

// }

// console.log(arr)

//
// // тепер: [bruce, maria, jhon]
// alert(arr[0].name); // Bruce
// alert(arr[1].name); // Maria
// alert(arr[2].name); // Jhon







// =======  14.01.2023==========

// Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>Change the content of a cell</title>
// <style>
//   .cube {
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   background: green;
// }
// </style>
// </head>
// <body>

// <div class="cube" style="top: 0; left: 0;"></div>
// </body>
// </html>


//  2

// Змініть стиль тексту абзацу за допомогою коду JavaScript
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>JS DOM paragraph style</title>
// </head>
// <body>
/* <p id ='text'>JavaScript Exercises</p>
<div>
  <button id="jsstyle">Style</button>
</div> */
// </body>
// </html>
//
// При натисканні на кнопку буде змінено шрифт, розмір шрифту та колір тексту абзацу
// При наступному натисканні кнопки cтилі будуть знову змінюватись
// Після кожного кліку будуть підставлятись нові значення із масивів colors, fonts, fontSizes  послідовно

// const colors = ['gold', 'green', 'yellow', 'blue', 'black', 'brown', 'purple'];
// const fonts = ['Arial', 'Roboto', 'Open Sans', 'Montserrat', 'Noto Sans', 'Raleway', 'Lato'];
// const fontSizes = ['12px', '3rem', '15px', '4em', '24px', '48px', '8em'];

// const text = document.querySelector('#text');
// const btn = document.querySelector('#jsstyle');

// btn.addEventListener('click', onClick);
// let i = 0;
// function onClick(evt){
//   if(colors.length <= i){
//     i=0
//   }
// text.style.color = colors[i]
// text.style.fontFamily = fonts[i]
// text.style.fontSize = fontSizes[i]
// i +=1;
// }

// console.log(text.style)


// 3

// Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
//   <title>Remove items from a dropdown list</title>
// </head>
// <body>
// <form class="js-form">
//   <select id="colorSelect">
//     <option>Red</option>
//     <option>Green</option>
//     <option>White</option>
//     <option>Black</option>
//   </select>
//   <input id="removeOption" type="button" value="Select and Remove">
//     <br/>
//     <br/>
//     <br/>
//     <label htmlFor="add">Add new option</label> <br/>
//     <input id="add" type="text" placeholder="New option">
//     <input id="addOption" type="button" value="Add option">
// </form>
// </body>
// // </html>

// const form = document.querySelector('js-form');
// const input = document.querySelector('#removeOption');
// const select = document.querySelector('#colorSelect');

// const inputAdd = document.querySelector('#add');
// const inputBtn = document.querySelector('#addOption');

// input.addEventListener('click', onRemOption)

// function onRemOption(){
//   console.log(select)

//   select.selectedOptions[0].remove();
// }

// inputBtn.addEventListener('click', onAddOption);
// function onAddOption(){
//   let {value} = inputAdd;
// if(value.trim() === ''){
//   return;
// }
//   const option = document.createElement('option')
//   option.textContent = value;
//   select.appendChild(option)
//   inputAdd.value = '';

// // другий варіант
//    // const option = `<option>${value}</option>`;
//   // select.insertAdjacentHTML('beforeend', option)
// }


// 4 задача

// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

/* <style>
  table {
  margin: 0 auto;
  border-collapse: collapse;
}

  td {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>

<body>
<div class="board">
  <table>
    <tbody>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td class="active"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</div> */

// const board = document.querySelector('.board');

// board.addEventListener('click',onClickBoard)

// function onClickBoard(evt){
//   console.log('onClickBoard')

//   if(evt.target.tagName === 'TD'){
//     evt.target.style.background = 'green';
//   }
// }
// const activeTd = document.querySelector('.active');

// activeTd.addEventListener('click', onClickTd);
// function onClickTd(evt){
//   evt.target.style.background = 'red';
// }

// 5 задача

// / Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

// // <head>
// //   <meta charSet="UTF-8">
// //     <title>Get And Style All Tags</title>
// // </head>
// // <body>
// // <p>[<a href="#" class="js-link">On mouse over here bold words of the following
// //   paragraph will be highlighted</a>]</p>
// // <p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
// //   intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
// //   write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
// // </body>

// const link = document.querySelector('js-link');
// const text = document.querySelector('js-text');
// link.addEventListener('mouseover')

// function onHovetEl(evt){
//   console.log(evt)
// }

// link.addEventListener('mooseout', onHoverQut)

// function onHoverQut(evt){
//   console.log(evt)
// }

// function changeColor(color)(
//   const list = text.querySelectorAll('strong')
// )

// задача 6

// Напишіть програму JavaScript TodoList для добавлення нових завдань у список

// <form>
//   <label htmlFor="add">Add new task</label> <br/>
//   <input id="add" type="text" placeholder="New task">
//     <input id="addTask" type="button" value="Add task">
//
//       <ul id="tasks"></ul>
// </form>
//