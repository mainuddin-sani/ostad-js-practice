function printName(print1, print2){
    console.log(`This is ${this.name}, I love to ${print1} ${print2} `);
}

const sani = {
    name: 'Mainuddin Sani',
    age: 30,
}

const print1 = "Gaming";
const print2 = "Programming";

const applyFunction = [print1,print2];

// printName.call(sani, print1, print2);
// printName.apply(sani, applyFunction);
const bindFunction =  printName.bind(sani, print1, print2);
bindFunction();