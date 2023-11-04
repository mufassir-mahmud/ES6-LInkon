// forEach, Map, Find, Filter, Reduce

const arr = [11,22,33];
// for(let item of arr){
//     console.log(item);
// }

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// const num = [2,4,6];
// const number = (x) => console.log(x);;
// num.forEach(number)
// const number = [1,3,5,7];
// const num = x => console.log(x);
// number.forEach(y => console.log(y))
arr.forEach(x => console.log(x));
const fruits = ['mango', 'orange', 'banana'];
fruits.forEach(y => console.log(y))

const numbers = [2,4,6];
let sum = 0;
numbers.forEach(item =>{
    sum += item;
    console.log(item,sum);
} );

