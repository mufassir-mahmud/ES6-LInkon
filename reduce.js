const numbers = [1,2,3,4,5];
const initial = 50
const sum = numbers.reduce((prev,curr) => prev*curr, initial)
console.log(sum);