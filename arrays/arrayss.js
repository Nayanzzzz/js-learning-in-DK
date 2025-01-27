//arrays

let dishess = ['Biryani','Pulao','Karahi','Kabab','Korma'];
console.log(dishess[1]);

let a2 = [1,2,3,4,5];
console.log(a2[0]);

//modify the array

a2[1] = 22;
console.log(a2)

//join method (convert into string)

let res = dishess.join(' ');
console.log(res);

//indexof

console.log(dishess.indexOf('Karahii'));
console.log(dishess.indexOf('Karahi'));

//concate 

let newarr = ['Pizza','Burger','Sandwich'];
let a4 = dishess.concat(newarr);
console.log(a4[5]) 

//push
console.log(a4.push("Nihari"));

//pop

console.log(a4.pop());

//methods returm boolean values

let email = "abc@gmail.com"
console.log(email.includes('@'));

// == , === , != , !== , < , > , ... return boolean values 
let points = 100;
console.log(points == 100);
console.log(points === 100);    
console.log(points != 100);
console.log(points !== 100);
console.log(points < 100);
console.log(points > 100);
console.log(points <= 100);
console.log(points >= 100);
console.log(points == "100");
console.log(points === "100");