function greet(){
    console.log(`welcome ${this.name} in ${this.company} technology`)
}

let intern={
    name:"zero",
    company:"devkrest"
}

let combine = greet.bind(intern);
combine();




// pass by reference and pass by value

let arr=[1,2,3,4];
let getvalue = arr;
//here value pass by reference 

console.log(getvalue);
getvalue[5]=6;
console.log(getvalue)
console.log(arr)


//pass by value
let a=[1,2,3,4,5]
let b=[...arr]

console.log(b)
b[5]=6;
console.log(b)
console.log(a);