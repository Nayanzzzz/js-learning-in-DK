//replace all method

// The replaceAll() method searches a string for a value or a regular expression.

// The replaceAll() method returns a new string with all values replaced.

// The replaceAll() method does not change the original string.

// The replaceAll() method was introduced in JavaScript 2021.

// The replaceAll() method does not work in Internet Explorer.


let a ="jkdbkfjksf";

let b=a.replaceAll("k","z");
console.log(b);




const abc =(x)=>{
    return x*2;
}

let c = "cat dog over";
let z=c.replaceAll(/CAT/gi,abc(2));
console.log(z)
