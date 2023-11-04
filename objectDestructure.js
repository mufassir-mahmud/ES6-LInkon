const person ={
    name: 'Mufassir',
    age:21,
    id: 484121
}

const {age,...rest} = person;
console.log(age,rest);