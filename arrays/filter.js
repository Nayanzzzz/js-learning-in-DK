let a=[1,2,3,4,5];



function check(num){
    return num>2;
}

let b=a.filter(check);
console.log(b)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Define a callback function to filter even numbers
// function isEven(num) {
//   return num % 2 === 0; // Returns true if the number is even
// }

// // Use the filter() method
// const evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


const z=[1,2,3,4,5,6];

const x= z.filter(function(num){
    return num<4;
})
console.log(x)