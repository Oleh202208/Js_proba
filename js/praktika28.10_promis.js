
// Завдання 1

// Отримати дані з API і вивести їх на сторінку
// https://dog.ceo/dog-api/

// const BAZE_URL = 'https://dog.ceo/api/breeds/image/random';

// const btn = document.querySelector('.fetch');
// const input = document.querySelector('.input');
// const ul = document.querySelector('.js-ul')

// btn.addEventListener('click', onBtnClick);

// function onBtnClick(e){
//   e.preventDefault();

//   const value = input.value.trim();

//   fetch(`${BAZE_URL}/${value}`)
//   .then(res =>res.json())
//   // .then(res => console.log(res))
//   .then(res => ul.innerHTML = createHTML(res.message))
//   .catch(err => console.log(err));
// }


// function createHTML(arr) {
//   return arr.map((el, index) => `<li>
//   <img src="${el}" alt="Dog picture${index}">
// </li>`).join('');
// }



// Завдання 2

// Отримати дані з API та вивести їх на сторінку
// http://universities.hipolabs.com/search?country=Ukraine
// http://universities.hipolabs.com/search?country=United+States


// const BAZE_URL = 'http://universities.hipolabs.com/search?';

// const input = document.querySelector('.input');
// const btn = document.querySelector('.fetch');
// const ul = document.querySelector('.js-ul');

// btn.addEventListener('click', onBtnClick);

// function onBtnClick(e){
//   e.preventDefault();

//   fetch(`${BAZE_URL}country=${input.value}`)
//   .then(res => res.json())
//   .then(res => createMarkup(res))
//   .catch(err => console.log(err));

// }

// function createMarkup (arr){
//   const markup = arr.map(el => {
//     const {name, web_pages} = el;
//     return `<li><a href="${web_pages[0]}" target="_blank" > ${name}</a></li> `
//   }).join('');
//     ul.innerHTML = markup;
// }


// Завдання 3

// Отримати дані з API та вивести їх на сторінку
// http://colormind.io/  api/

const BAZE_URL = 'http://colormind.io/api/';

const option ={
  metod: 'POST',
  body: JSON.stringify({
    model: "default"
  }
    
  )
 headers: {
  'Contend-Type': 'aplication/json'
 }
}

fetch(BAZE_URL, option).then(res => res.json)
.then(data => renderColor(data,result));


function renderColor (item){
  const markup = item.map(([r,b,g])=> 
  `<li style="width: 50px; height: 150px; background-color: rgb"></li>`)

}






// Отримати дані з API і вивести їх на сторінку
// https://deckofcardsapi.com/

// const BAZE_URL = 'https://deckofcardsapi.com/api/';

// async function shuffleCards() {
  
// const response = await fetch(`${BAZE_URL}deck/new/shuffle/?deck_count=${number}`)
// const result = await response.json();
// const id = result.deck_id;
// return id;
// }
// shuffleCards(1)

// async function drowCard(id, number) {
//   const response = await fetch(`${BAZE_URL}deck/${id}/draw/?count${number}`);
//   const result= await response.json();
//   return result;
// }

// function cardsMarkup(arr){
//   arr.map(({image, value, suit})=> `<li><img src="${image}"`)
// }





// Отримати дані з API і вивести їх на сторінку
// https://randomuser.me/

// Отримати дані з API і вивести їх на сторінку
// //https://reqres.in/

// const BAZE_URL = "https://reqres.in/";
// const user = {
//   "name": "morpheus",
//   "job": "leader"
// }
// const option ={
//   metod: 'POST',
//   body: JSON.stringify(user),
//   headers: {
//     Accent: 'application/json',
//     'Content-Type': 'application/json'
//   }

// }
// function fetchResult(){
//   fetch(`${BAZE_URL}api/users`)
// }



// // List API Данні
// // Отримати дані з API та вивести їх на сторінку
// // https://api.publicapis.org/entries


// fetch('https://api.publicapis.org/entries');



// ДЗ
// Отримати дані з API і вивести їх на сторінку. Добавити стилі.
// https://openweathermap.org/api

// https://nordicapis.com/how-to-build-an-api-driven-weather-app/