// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


let arr=[1,2,3,4,5,6];

let max=arr.reduce((acc,curr)=>
    (curr > acc ? curr : acc),-Infinity);

console.log(max)

let sum=arr.reduce((accvalue,currvalue)=>(accvalue+currvalue),0);
console.log(sum)

//sum of all elements

let a = [1,2,3,4,5,6];

let b = a.reduce((total,currVal)=>{
    return  total + currVal
},0)

console.log(b)
