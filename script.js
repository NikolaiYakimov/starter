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
const age3 = (birthYear, cuuryear) => cuuryear - birthYear;
console.log(age3(2002, 2024));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearUntilRetirement(2002, "Nikolay"));
console.log(yearUntilRetirement(2003, "Marin"));

function cutFruitMachine(frruit) {
  return frruit * 4;
}
function fruitProcessor(apple, oranges) {
  const applePieces = cutFruitMachine(apple);
  const orangePieces = cutFruitMachine(oranges);

  const juice = `Juice with ${Number(applePieces)} apples pieces and ${Number(
    orangePieces
  )} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(2, 4));
