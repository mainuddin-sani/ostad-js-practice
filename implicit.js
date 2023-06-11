// implicit binding

function Person(name,age){
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name)
        }
    }
}

const sani = new Person("Mainuddin sani",30);
const zahid = new Person("Zahid", 30);
zahid.printName()
