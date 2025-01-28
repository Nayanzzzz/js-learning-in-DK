//concat method

// The concat() method joins two or more strings.

// The concat() method does not change the existing strings.

// The concat() method returns a new string.

let a="hi";
let b="how";
let c="are";

let d=a.concat(" ",b," ",c);
console.log(d)

//use funcatoin in concat

const abc =(str)=>{
    if(typeof str == "string"){
        return str;
    }
    return "@"
}

let z ="jassi";
let x = z.concat(" ",abc("bumrah"));
console.log(x);
