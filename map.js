const numbers = [2,4,5];
const number = numbers.map(num => num*2 );
console.log(number);

/**
 * ----------------
 * different between map and forEach
 * 
 *-------------------- **/ 


// const numbers = [2,4,5];
// const number = numbers.forEach(num => num );
// console.log(number);
const fruits = ['mango', 'orange', 'banana'];

fruits.forEach((item, index, arr) => console.log(item, index, arr))