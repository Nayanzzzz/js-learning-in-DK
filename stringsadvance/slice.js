//slice method

// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1, ...


let a = "good morning";

let b=a.slice(1,8);
console.log(b)

let c=a.slice(1);
console.log(c)

let d=a.slice(a.length - 2);
console.log(d)

console.log("**************")

const abc = ()=>{
    return "0";
}
let q ="hello kya hal chal"
let w = q.slice(abc(),4);
console.log(w)

//why give not error