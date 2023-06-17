
// #1 Regular function

function regularAdd(x,y){
    return x+y;
}

// #2 Function Expression

const expressionAdd = function(x,y){
    return x+y;
}

// #3 Arrow function 

const arrowAdd = (x,y)=> x+y;

// #4 constructor function

function Person(name,age,education){
    this.name = name
    this.age = age;
    this.education = education;
}

const human = new Person("Mainuddin sani");

// testing

console.log("Regular function: ", regularAdd(3,4));
console.log("Function Expression: ", expressionAdd(3,4));
console.log("Arrow Function: ", arrowAdd(3,4));


// best way to pass arguments

function test(options = {}){
    options.x = options.x || 0;
    options.y = options.y || 0;
    options.z = options.z || 0;
    return options.x + options.y + options.z;
}

console.log("test: ", test({z: 3, x: 5, y: 2}))

