// const hi = (firstName, secName, age) => console.log(`Hi ${firstName} ${secName}, age is ${age}`);
// hi("ivan", "petrov", 12);

// console.log(hi);

//---------------------------------------------//

// function X() {
//   const a = 5;
//   function b() {
//     return a ** 2;
//   }
//   return b;
// }

// console.log(X()());

// const callB = X();
// console.log(callB());

// class A {
//   constructor() {
//     this.f = function () {
//       console.log("A: вызываем метод f()");
//     };
//     this.g = function () {
//       console.log("A: вызываем метод g()");
//     };
//   }
// }

// const a = new A();
// a.f(); // "A: вызываем метод f()"
// a.g(); // "A: вызываем метод g()"

// function createCheckNumberFunc() {
//   return function (number) {
//     if (number > 0) {
//       console.log("+++");
//     } else if (number < 0) {
//       console.log("---");
//     }
//   };
// }

// createCheckNumberFunc()(-2);

// const checkNumber = createCheckNumberFunc();
// checkNumber(-2);

//---------------------------------------------//

// const sumOfThreesome = (num1, num2, num3) => {
//   console.log(num1 + num2 + num3);
// };

// sumOfThreesome(1, 2, 3);

// function SumOfThreeNum(num1, num2, num3) {
//   if (num3 === undefined) {
//     return num1 + num2;
//   } else {
//     return SumOfThreeNum(num1 + num2, num3);
//   }
// }
// console.log(SumOfThreeNum(1, 1, 1));

//---------------------------------------------//

// function someNum(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + someNum(num - 1);
// }

// console.log(someNum(5));

//---------------------------------------------//

// function nume(a) {
//   return Math.sqrt(a);
// }
// const num1 = nume(4);
// const num2 = nume(9);
// const sumNum = num1 + num2;

// console.log(sumNum);
// console.log(Math.min(num1, num2));
//---------------------------------------------//

// function dayOfTheWeak(day) {
//   switch (day) {
//     case 1:
//       console.log("Понедельник");
//       break;
//     case 2:
//       console.log("Вторник");
//       break;
//     case 3:
//       console.log("Среда");
//       break;
//     case 4:
//       console.log("Четверг");
//       break;
//     case 5:
//       console.log("Пятница");
//       break;
//     case 6:
//       console.log("Суббота");
//       break;
//     case 7:
//       console.log("Воскресенье");
//       break;
//     default:
//       console.log("Такого не бывает!");
//       break;
//   }
// }
// dayOfTheWeak(-1);
// dayOfTheWeak(12);
// dayOfTheWeak(2);
// dayOfTheWeak("12acs");

//---------------------------------------------//
