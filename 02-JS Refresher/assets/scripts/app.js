// 1. Import and Export...........................................................
// import { apiKey } from "./util.js";
// import apiKey from './util.js'
// import { apiKey, abc as name } from "./util.js";
// or we can use
// import * as util from './util.js'

// console.log(apiKey, name);

// 2. Variables.....................................................................
// let userMessage = 'Hello I am Muhammad Waleed';
// console.log(userMessage);
// console.log(userMessage);

// const userName = 'M. Waleed'; // preferable
// console.log(userName);
// userName = "Ali Ahmad" //Error

// 3. Operators...................................................................
// console.log(10 + 5);
// console.log("10" + 5);
// console.log("Hello" + " World");
// console.log(10 - 5);
// console.log("10" - 5);

// console.log(10 === 5);
// console.log(10 === 10);
// console.log(10 < 5);
// console.log(10 > 5);
// console.log(10 >= 5);
// console.log(10 <= 5);

// if (10 === 10){
//     console.log("Hello World");
// }

// 4. Functions......................................................................
// function greet(userName, message='Hello!') {
//     //console.log("Hello!", userName, message);
//     return 'Hi, I am ' + userName + '.' + message;
// }

// const output = greet('Kamran');
// console.log(output);

// const output2 = greet('Sabir', 'I am playing cricket');
// console.log(output2);

// 5. Arrow Functions...................................................................
// export default (userName, message) => {
//     console.log("Arrow Function");
//     return userName + message;
// };

// 6. Objects and Classes...............................................................
// const user = {
//     name: 'Waleed',
//     age: 21,
//     greet(userId) {
//         console.log('Hello user', userId);
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet(1)

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = name;
//     }
//     greet(){
//         console.log('Hi');
//     }
// }

// const user1 = new User('Hamid', 25);
// console.log(user1);
// user1.greet()

// 7. Arrays......................................................................
// const hobbies = ['sports', 'cooking', 'reading'];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);

// hobbies.push("Painting")
// console.log(hobbies[3]);

// const index = hobbies.findIndex((item) => item === "Painting")

// console.log(index);

// const editedHobbies = hobbies.map((item) => item + '!');

// console.log(editedHobbies);

// 8. Destructuring.........................................................................

// Destructuring array
// const [firstName, lastName] = ['Muhammad', 'Waleed'];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// Destructuring object
// const {name: userName, age} = {
//     name: 'Ali',
//     age: 20,
// };

// console.log(userName);
// console.log(age);

// 9. Spread operator.............................................................................
// const hobbies = ['Sports', 'Cooking']
// const user = {
//     name: 'Khalid',
//     age: 32,
// };

// const newHobbies = ['Reading'];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser);

// 10. Control Structure..................................................................................
// const password = prompt('Your password');

// if(password === 'Hello'){
//     console.log("Hello Works");
// } else if(password === 'hello'){
//     console.log('hello works');
// } else{
//     console.log('Access not granted');
// }

// const hobbies = ['sports', 'cooking'];

// for(const hobby of hobbies) {
//     console.log(hobby);
// }

// 11. Passing values as function...............................................................
// function handleTimeout() {
//     console.log('Timed out');
// }

// const handleTimeout2 = () => {
//     console.log("timed out again");
// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);

// setTimeout(() => {
//     console.log('Again timed out');
// }, 4000)

// function greeter(greetFn){
//     greetFn();
// }

// greeter(() => console.log('Hi'))

// 12. Asynchronous JavaScript...........................................................................
// console.log('one');
// console.log('two');

// setTimeout(() => {
//     console.log('hello');
// }, 4000);

// console.log('three');
// console.log('four');

// Callback function
// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(2, 3, sum)

// 13. Callback hell.......................................................................................

// function getData(dataId, getNextData){ // suppose it takes 2s
//     setTimeout(() => {
//         console.log('data', dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// Callback Hell
// getData(1, () => {
//     console.log('getting data2 ...');
//     getData(2, () => {
//         console.log('getting data3 ...');
//         getData(3, () => {
//             console.log('getting data4 ...');
//             getData(4)
//         })
//     });
// });

// 14. Promises ....................................................................
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a Promise");
//   resolve("Success");
// });

// function getData(dataId, getNextData) {
//   // suppose it takes 2s
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
// let result = getData(123);
// console.log(result);

// setTimeout(() => {
//   console.log(result);
// }, 8000);

// how to use promise.....................................................
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve("Success");
//     reject("Error")
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise is fulfilled", res);
// });

// promise.catch((err) => {
//     console.log('Promise is rejected', err);
// })

// Promise Chaining...................................................................
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success1");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success2");
//     }, 4000);
//   });
// }

// console.log("fetching data1..........");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log("fetching data2..........");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// async await..........................................................................
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Weather data');
//             resolve(200);
//         },2000)
//     });
// }
// async function getWeatherData(){
//     await api(); // 1st call
//     await api(); // 2nd call
// }

// getWeatherData();

// now writing the above getData function as async await
// console.log('Waleed');
// console.log('Hi');
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataId);
//             resolve('success')
//         }, 2000)
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// (async () => {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }) ();

// console.log('Are you good');
// // getAllData();
// console.log('YEs I am good');

// Fetch API...............................................................................
const URL = "https://api.gameofthronesquotes.xyz/v1/random/5";

const quotePara = document.querySelector("#quote");
const btn = document.querySelector("#btn");

// const getQuotes = async () => {
//   console.log("getting data......");
//   let response = await fetch(URL);
//   console.log(response);

//   let data = await response.json();
//   console.log(data);
//   console.log(data[0].sentence);

//   // showing the result on webpage
//   quotePara.innerText = data[0].sentence;
// };

// Using Promise chaining instead of async await
function getQuotes() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      quotePara.innerText = data[0].sentence;
    });
}

btn.addEventListener("click", getQuotes);
