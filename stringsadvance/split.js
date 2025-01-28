//split method

// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.


let a="kjdghfkbhdjk";

let b=a.split("j",1);
console.log(b)

let c=a.split("j");
console.log(c)



// Use the limit parameter:


let z="hi hoe are u";
let x=z.split(" ",3);
console.log(x)
console.log(x[1]);