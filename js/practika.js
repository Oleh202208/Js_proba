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

// Типів транзакцій лише два.
// Можна покласти або зняти гроші з рахунку
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      id: Date.now(),
      type,
      amount,
      date: new Date(),
    };
  },

  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(DEPOSIT, amount));
  },

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(this.createTransaction(WITHDRAW, amount));
  },

  //Метод повертає поточний баланс
  getBalance() {
    return this.balance;
  },

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},

  //Метод повертає кількість засобів певного типу
  //транзакції з історії транзакцій
  getTransactionType(type) {},
};
account.deposit(5000);
console.log(account)