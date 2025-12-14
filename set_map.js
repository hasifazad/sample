let numbers=new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);
numbers.add(40);
// numbers.add({id:1});

console.log(numbers);
console.log(numbers.size);
console.log(numbers.has(10));

// let arr=[10,30,30,10,40,50,60];
// let arr1=new Set(arr);
// console.log(arr1);


let phonebook = new Map();

phonebook.set("Saad", "123-456-7890");
phonebook.set("Amir", "987-654-3210");

console.log(phonebook.get("Saad")); 
console.log(phonebook.has("Amir")); 
console.log(phonebook.size); 
