const number = [1,2,3,4,6,9];
const [first,second, ...bakiNUmber] = number;
// console.log(bakiNUmber);

const number2 = [1,2,3,4,6,9]; 
const [, , ,sobNumber] = number2;
console.log(sobNumber);

const user = [
    {name: "Mainuddin Sani", age: 30},
    {name: "Sani", age: 10},
]

for(const {name,age} of user){
    console.log(name);
}


const data = {
    name: "Mainuddin sani",
    age: 30,
    address: {
        street: '123 Dhaka',
        city: 'Example'
    },
    hobbies: ['Cricket', 'Football']
}

const {name, address: {city}, ...rest} = data;
console.log(rest.age);

// rest syntax


function printPersonDetails({firstName,lastName}){
    console.log(`First Name: ${firstName}`)
    console.log(`First Name: ${lastName}`)
}

const person = {
    firstName: 'Mainuddin Sani',
    lastName: 'Sani',
}

printPersonDetails(person);