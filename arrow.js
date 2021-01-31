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

const give5 = () => 5;
const result2 = give5();
console.log(result2);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7,5);
console.log(result3);