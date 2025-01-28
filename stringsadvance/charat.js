// The charAt() method returns the character at a specified index (position) in a string.

let a="vikings";

let b=a.charAt(5);
console.log(b)


//use function as parameter

const abc =(num)=>{
    if(typeof num == "number"){
        return num
    }
    return -1;
}

let z="thor";
let y=z.charAt(abc(2));
console.log(y)




