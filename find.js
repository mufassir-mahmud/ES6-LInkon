const numbers = [11,22,33,44,55,66];

const find = (number) =>{
    for(let num of number){
        if(num === 33)
        return num
    }
    return null;
}

const found = find(numbers);
console.log(found);

const y = numbers.find(num => num === 33);
console.log(y);