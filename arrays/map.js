let a=[1,2,3,4];



let b = a.map(val =>{
    return val+1;
})

console.log(b)



const numbers = [1, 2, 3, 4, 5];

// Define a normal function to use as the callback
function double(num) {
  return num * 2;
}

// Use the map() function with the normal function
const doubledNumbers = numbers.map(double);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]