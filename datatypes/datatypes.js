                                          //strings

let firstName = 'John';
let lastName = 'Doe';
let middleName = "Smith";

console.log(firstName,middleName,lastName);

//string concate method
//method 1 using + operator

let fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log(fullName);

//method 2 using template literals
let fullName2 = `${firstName} ${middleName} ${lastName}`;
console.log(fullName2);

//getting strig character
console.log(firstName[2]);

//strings methods
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.indexOf('o'));

//strings common methods
let hobbies = "     Reading,Writing,Coding,playing,playing    ";
console.log(hobbies);

//trim method
let res= hobbies.trim();
console.log(res);

//lastindexof method
console.log(res.lastIndexOf('playing'));

//includes method
console.log(res.includes('Coding'));

//sclice method
let a= "ewubfdjbiur"
console.log(a.slice(0,4));

console.log(a.slice(2));

//string to array conversation 
//split method
let favouriteColrs = "red,blue,green,yellow";
let arrcolor = favouriteColrs.split(',');
console.log(arrcolor);

//string are immutable

let str = "Hello";
console.log(str);

                                             //Number

let score= 4;
console.log(score)
console.log(typeof score);

//mathmatical operators
//priority and precedence

// (i) ()
// (ii) **
// (iii) * / % (left to right)
// (iv) + - (left to right)

let result = score*2 + (4*3) - 8/2 % 4;
console.log(result);

//type conversion 
let string = "100";
console.log(string);
let numberchange;
numberchange = Number(string);
console.log(numberchange,typeof numberchange);

