// const person = {
//     firstName: 'Mainuddin Sani',
//     lastName: 'Alex',
//     id: 12,
//     age: function(){
//         return 30
//     }
// }
// person.age = person.age.toString();
// const myArray = JSON.stringify(person);
// console.log(myArray);
// person.age = 45;
// person.liberties = [
//     'javascript', 
//     'React', 
//     'Vue', 
//     'Apline',
//     {id: 1, name: 'Lara', ostad: 'Mara'}
//  ]

//  for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         const element = person[key];
//         console.log(element);
//     }
//  }

// person.liberties.map(libertie => {
//     let jsLibre = libertie;
//     jsLibre += `${jsLibre} is the best`;
//     console.log(jsLibre);
// })
// console.log(person);





// let age = 5;

// const ageMension = age>18 ? ('adult'):(age>16? 'sabalok' : (age<5? 'ekdom baccha': 'ektu baccha'));

// console.log(ageMension);

// object accessors

// const person = {
//     firstName: "John",
//     lastName: "",
//     set fullName(lastName) {
//       this.lastName = lastName;
//     }
// };

// person.fullName= "Doe";

// console.log(person.lastName);

// object constructor

function Car(name,weight,long,oil,color){
    this.carName = name,
    this.carWeight = weight+'kg',
    this.carLong = long+'length',
    this.carOil = oil+'litter',
    this.colors = color
}

const myCar = new Car('BMW',500,200,50,['Red','Green','Brown']);
console.log(myCar);
