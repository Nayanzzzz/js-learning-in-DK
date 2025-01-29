let a=[1,2,3,4,5,6,7,"joi"];

let b=a.some(value=>{
    return  typeof value == "number"}
)

console.log(b)


let z = [1, 2, 3, 4, 5, 6, 7, "joi"];

let x = z.every(function (value) {
  return typeof value == "number";
});

console.log(x); // Output: false