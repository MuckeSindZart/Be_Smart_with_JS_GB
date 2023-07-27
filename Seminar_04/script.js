// const arr = [1, 2, 3];
// console.log(arr);

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// arr.forEach((element) => console.log(element));

// arr.forEach((element, index) => console.log(element, index));

// /* arr.forEach(function (element) {
//   console.log(element);
// }); */
//--------------------------------------------------------------//
// const arr = [1,2,3]
// console.log(arr.length);
// console.log(arr['length']);
//--------------------------------------------------------------//
// const arrChar = [1,2,"as"];
// console.log(arrChar.length);
//--------------------------------------------------------------//
// const arr = [1, 2, 3];

// arr.forEach((element, index, arr) => (arr[index] = ++element));
// //
// console.log(arr);

// for (let index = 0; index < arr.length; index++) {
//     arr[index] = ++arr[index];
// }
// //
// console.log(arr);
//--------------------------------------------------------------//
// const arr = [];

// arr[8] = 10;
// arr[10] = 6;
// //
// console.log(arr);
// console.log(arr.length);
// console.log(arr[arr.length]);
// console.log(arr[arr.length - 1]);
//--------------------------------------------------------------//
// const arr = [1,2,3];
// console.log(arr);
// arr.push(4);
// arr.push(5);
// arr.push(4,5);
// console.log(arr);
// arr.pop()
// arr.pop()
// arr.unshift(0);
// console.log(arr);
//--------------------------------------------------------------//
// const arr = [1, 2, 3];
// console.log(arr);
// const puk = arr.splice(0, 2, "b");
// console.log(arr);
// console.log(puk);
//--------------------------------------------------------------//
// for (let index = 11; index <= 33; index++) {
//   console.log(index);
// }
//--------------------------------------------------------------//
// for (let index = 1; index <= 99; index += 2) {
//   console.log(index);
// }
//--------------------------------------------------------------//
// for (let index = 100; index >= 0; index--) {
//   console.log(index);
// }
//--------------------------------------------------------------//
// let num = 33;
// let count = 0;
// while (num <= 1000) {
//   num *= 3;
//   count++;
// }
// console.log(num);
// console.log(`result count = ${count}`);
//--------------------------------------------------------------//

// const arr = [2, 5, 9, 15, 1, 4];

// // arr.forEach((element) => {
// //   if (element > 3 && element < 10) {
// //     console.log(element);
// //   }
// // });

// const resFilter = arr.filter((element) => element > 3 && element < 10);

// console.log(resFilter);
//--------------------------------------------------------------//
// let sum = 0;
// for (let index = 0; index <= 100; index += 2) {
//   sum += index;
// }
// console.log(sum);

// const arr = Array(50).fill(0);
// const arrAnswer = arr.map((_, i) => 2 + i * 2);
// console.log(arrAnswer);
// console.log(arrAnswer.reduce((sum, element) => sum + element, 0));

// const newSum = [];
// let sum = 0;
// for (let index = 0; index < 50; index++) {
//   newSum.push(2 + index * 2);
//   sum += 2 + index * 2;
// }
// console.log(sum);
// console.log(newSum);

//--------------------------------------------------------------//

// let str = "-";

// for (let i = 1; i <= 9; i++) {
//   str += i;
//   str += "-";
// }
// console.log(str);

// let arrStr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("-" + arrStr.join("-") + "-");

//--------------------------------------------------------------//

// const numbs = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < numbs.length; i++) {
//   if (numbs[i] === 0) {
//     break;
//   }
//   console.log(numbs[i]);
// }

// let i = 0;
// while (numbs[i] !== 0) {
//   console.log(numbs[i]);
//   i++;
// }
//--------------------------------------------------------------//
// const numbs = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < numbs.length; i++) {
//   if (numbs[i] === 0) {
//     continue;
//   } else if (numbs[i] % 2 === 0) {
//     console.log(`${numbs[i]}^2= ` + Math.pow(numbs[i], 2));
//   } else if (numbs[i] % 3 === 0) {
//     console.log(`${numbs[i]}^3= ` + Math.pow(numbs[i], 3));
//   } else {
//     continue;
//   }
// }

//--------------------------------------------------------------//

// const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 3, 3, 12, 3, 3];
// console.log(arr.filter((element) => element === 3).length);

// let countMatch = arr.c;
// const resFilter = arr.filter((element) => element > 3 && element < 10);

//--------------------------------------------------------------//

const abc = [1, 2, 3, 4, 5];
console.log(abc);
console.log(abc.slice(1, 3));
console.log(abc);
console.log(abc.splice(1, 2));
console.log(abc);
