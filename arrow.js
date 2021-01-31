// function doubleIt(num) {
//     return num * 2
// };
// const doubleIt = function myFun(num) {
//     return num *2;
// };

// Arrow function =() =>
const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);

const add = (x, y) => x + y;
const addNum = add(2, 5);
console.log(addNum);