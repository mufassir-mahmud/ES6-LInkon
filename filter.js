const numbers = [11,22,33,44,55,66,77,88,99];

const filter = (number) =>{
    const result = [];
    for(num of number){
        if(num%2 === 0){
            result.push(num)
        }
    }
    return result
}
const myNumbers = filter(numbers);
console.log(myNumbers);
const y = numbers.filter(x => x%2 !== 0);
console.log(y);