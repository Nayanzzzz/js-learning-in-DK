//repeat method 

// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.


let a = "hi";
let b = a.repeat(5);
console.log(b)

const abc =(num)=>{
    if(typeof num == "number"){
        return num;
    }
    return 1;
}

let z="good";
let y = z.repeat(abc(3));
console.log(y)

let n = z.repeat(abc("number"));
console.log(n)