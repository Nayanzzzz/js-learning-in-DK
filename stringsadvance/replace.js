// The replace() method searches a string for a value or a regular expression.

// The replace() method returns a new string with the value(s) replaced.

// The replace() method does not change the original string.

let a = "habibi";

let b=a.replace("a","z");
console.log(b)

const func =(str)=>{
    console.log("str==> ",typeof str)
    if((typeof str) == "number"){
        return "q";
    }
    return str;

}
let z ="habibi";
let y = z.replace("h",func(2));
console.log(y)
let n = z.replace("h",func(1))
console.log(n)

//how it works?