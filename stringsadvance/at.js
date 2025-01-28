//at method 

// The at() method returns an indexed character from a string.

// The at() method returns the same as [].

let a="virat kohali";

let b=a.at(2);
console.log(b)


//add function as parameter
const func =(num)=>{
    if(typeof num == "number"){
        return num
    }
    return -1;
}

let z="rohit sharma"
let y =z.at(func("hi"));
console.log(y)

// return same as [] how?????