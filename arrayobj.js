//create object called students and with properties

var student = {
    name : "John",
    age  : 25,
    grade : "A"
        };
console.log(student["name"]);

//create object car        
var car = {
    brand : "BMW",
    model :"BMW X5",
    year : 2011

};

console.log(car.brand);
//new property email

const user = {
    username :"john",
    isAdmin : true
};
user.email="john@gmail.com";
console.log(user.email);
console.log(user);
//create object product and add one property

var product = {};
product.type="electronics";
console.log(product);
var obj=product;
obj.type="tv";
console.log(product);
//create empty object person add details

var person={};
person.firstName="Alex";
person.lastName="Mark";
person.age=40;
console.log(person);