"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can druive ");

// const names = 23;

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();

// function fruitProcessor(apple, oranges) {
//   const juice = `Juice with ${Number(apple)} apples and ${Number(
//     oranges
//   )} oranges`;
//   return juice;
// }

// const appleAndOrangeJuice = fruitProcessor(4, 5);
// console.log(appleAndOrangeJuice);

// const orangeJuice = fruitProcessor(0, 6);
// const appleJuice = fruitProcessor(6, 0);

// console.log(orangeJuice);
// console.log(appleJuice);
// console.log(typeof appleAndOrangeJuice);

// function calcAge1(birthYear) {
//   const date = new Date();
//   const age = date.getFullYear() - birthYear;
//   return age;
// }

//This is function declaration

// const age1 = calcAge1(1991);
// console.log(`Call function before define it: ${age1}`);

// function calcAge1(birthYear) {
//   // const age = 2037 - birthYear;
//   //или може така като в Java
//   return 2037 - birthYear;
// }
// // const age1 = calcAge1(1991);
// console.log(age1);

// //This is function expresion
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(2002);
// console.log(`This is age2: ${age2}`);
// console.log(calcAge2(2002));

//Arrow funcntion
// const age3 = (birthYear, cuuryear) => cuuryear - birthYear;
// console.log(age3(2002, 2024));

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearUntilRetirement(2002, "Nikolay"));
// console.log(yearUntilRetirement(2003, "Marin"));

// function cutFruitMachine(frruit) {
//   return frruit * 4;
// }
// function fruitProcessor(apple, oranges) {
//   const applePieces = cutFruitMachine(apple);
//   const orangePieces = cutFruitMachine(oranges);

//   const juice = `Juice with ${Number(applePieces)} apples pieces and ${Number(
//     orangePieces
//   )} oranges pieces`;
//   return juice;
// }

// console.log(fruitProcessor(2, 4));

// function calcAge(birthYear) {
//   const date = new Date();
//   const age = date.getFullYear() - birthYear;
//   return age;
// }

// const yearThenRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   let retirement = 65 - age;
//   if (retirement < 0) {
//     return `You are retired! Congratulations!`;
//   } else {
//     return `${firstName} retires in ${retirement}`;
//   }
// };

// console.log(yearThenRetirement(2002, "Nikolai"));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(3, 4, 5);

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("There is no winner!");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //test2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ["Ivan", "Nikolay", "Yordan", "Stoian", "Ilia"];

// console.log(friends);

// const years = new Array(2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009);

// console.log(years);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Veselin";

// console.log(friends[2]);

//We can change singel value of the arr when he is const, but we can't change the whole array.Like the exc. bellow.

// friends = ["Ivan", "Stefcho"];

//Make arrays with diferent type of values

// const nikolay = ["Nikolay", "Yakimov", 22, "men"];
// console.log(nikolay);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [2001, 2002, 2003, 2004, 2005];
// //Don't do it like this
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
// //This is how we can store value from function to the arr

// const ageArray = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ageArray);

//Add elements methods
// const friends = ["Ivan", "Nikolay", "Yordan", "Stoian", "Ilia"];
// const newLenght = friends.push("Veselin", "Dimitur");

// console.log(
//   `Lenght of the arr is: ${friends.length} and the array have this elements: ${friends}`
// );
// console.log(newLenght);
// friends.unshift("Venci");
// console.log(friends);

// //Remove elements methods;
// const delFriend = friends.pop();

// console.log(friends);
// console.log(`Deleted friend is ${delFriend}`);

// friends.shift();

// console.log(friends);

// console.log(friends.indexOf("Nikolay"));
// console.log(friends.includes("Nikolay"));
// console.log(friends.includes("Bob"));

// //include used for conditions

// if (friends.includes("Nikolay")) {
//   console.log("You are such a smart gay");
// }

// const jonas = {
//   firstName: "Georgi",
//   lastName: "Stankov",
//   age: 22,
//   job: "programmer",
//   friends: ["Ivan", " Nikolay", "Yordan"],
// };

// console.log(jonas.lastName);

// const ivan = jonas;

// console.log(ivan);

// const jonas = {
//   firstName: "Georgi",
//   lastName: "Stankov",
//   age: 22,
//   job: "programmer",
//   friends: ["Ivan", " Nikolay", "Yordan"],
// };

// console.log(jonas.lastName);
// console.log(jonas["firstName"]);

// //expresion in bracket notation
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const jonasPrompt = prompt(
//   "What do you want to know about Jonas?You can choose between firstName,lastName,age,job and friends! "
// );

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasSomething";

// if (jonas[jonasPrompt]) {
//   console.log(jonas[jonasPrompt]);
// } else {
//   console.log("We don't have such a property in the object");
// }
// jonas["bestfriend"] = "ivan";

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends: ${jonas.friends}, abd his best friend is ${jonas.bestfriend}`
// );

// //Оr we can do it in this way

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );

//OBJECTS METHODS

// const jonas = {
//   firstName: "Georgi",
//   lastName: "Stankov",
//   birthYear: 2002,
//   job: "programmer",
//   friends: ["Ivan", " Nikolay", "Yordan"],
//   hasDriverLicense: false,
// };
// calcAge: function (birthYear) {
//   const date = new Date();
//   return date.getFullYear() - birthYear;
// },
//this is bad practice when we need this time more times

// calcAge: function () {
//   //this will show us the object
//   console.log(this);
//   const date = new Date();
//   return date.getFullYear() - this.birthYear;
// },

//this is how it needs to be  to take less time (i think),because the other one is havier computation, and in this way we create property in jonas obeject with name age,we can use dot notation to create new property like we did here
// calcAge: function () {
//   const date = new Date();
//   this.age = date.getFullYear() - this.birthYear;
//   return this.age;
// },
//It's good here to use calcAge because we don't know did we call it before we use this method
//   getSummery: function () {
//     return `${this.firstName}  is a ${this.calcAge()} old ${
//       this.job
//     } , and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](2003));

// console.log(jonas.calcAge());

// And now here we can use age instead calcAge()
// console.log(jonas.age);

//Challenge
//Make method that write this summery
//Jonas is a 46-years old teacher ,and he has a or not driver licens
// console.log(jonas.getSummery());

//LOOPS

// const jonas = [
//   "Georgi",
//   "Stankov",
//   2002,
//   "programmer",
//   ["Ivan", " Nikolay", "Yordan"],
//   false,
// ];

// for (let i = 0; i < 10; i++) {
//   console.log(`Lifting weights repetition ${i + 1}'s`);
// }
// console.log("--------------------------------------------------------");
// const friends = ["Ivan", "Nikolay", "Yordan", "Stoian", "Ilia"];
// const newLenght = friends.push("Veselin", "Dimitur");

// for (let i = 0; i < friends.length; i++) {
//   console.log(`Hi my name is ${friends[i]} `);
// }
// console.log("--------------------------------------------------------");

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i] === "Ilia") break;
//   console.log(`Hi my name is ${friends[i]} `);
// }
// console.log("--------------------------------------------------------");
// for (let i = 0; i < friends.length; i++) {
//   if (friends[i] === "Ilia") continue;
//   console.log(`Hi my name is ${friends[i]} `);
// }

// //We create a new array of the types of the element in jonas array
// const types = [];
// console.log("--------------------------------------------------------");
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   //one of this two ways to fill the array
//   // type[i]=typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// for (let i = 0; i < types.length; i++) {
//   console.log(types[i]);
// }

// //Another operation with arrays and loops
// const years = new Array(2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009);
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2024 - years[i]);
// }

// console.log(age);
// console.log("--------ONLY STRINGS--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") {
//     continue;
//   }
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--------BREAK WITH NUMBERS--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") {
//     break;
//   }
//   console.log(jonas[i], typeof jonas[i]);
// }

// const nikolay = [
//   "Georgi",
//   "Stankov",
//   2002,
//   "programmer",
//   ["Ivan", " Nikolay", "Yordan"],
// ];
// console.log(nikolay);
// //this is how to print the array backwards
// //if we start from nikolay.length the first el will be undifined

// for (let i = nikolay.length - 1; i >= 0; i--) {
//   console.log(nikolay[i]);
// }

// //LOOP IN LOOP

// for (let exc = 0; exc < 3; exc++) {
//   console.log(
//     `----------------Starting exercise ${exc + 1}------------------------`
//   );
//   for (let rep = 0; rep < 5; rep++) {
//     console.log(`We are doing exc ${exc + 1} at ${rep + 1} repetitions`);
//   }
// }

//While loop exc

// let i = 0;
// while (i < 10) {
//   console.log(`Lifting weights repetitions: ${i + 1}`);
//   i++;
// }

//Well now here Math.random give us number between 0 and 1,and we multiply it by 6, and after that add 1,because we want dice who have six 6-sides ,and after that we use Math.trunc  to remove the decimal part of the random number

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You get: ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`You win,You get: ${dice}`);
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log("------------------------Tips------------------");
console.log(totals);

const calcAvera = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
