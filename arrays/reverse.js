let a = [1,2,3,4,5,6];

a.reverse();

console.log(a);

function customReverse(arr, condition) {
    if (condition) {
      return [...arr].reverse(); // Return a new reversed array
    }
    return arr; // Return the original array
  }
  
  const arr = [1, 2, 3, 4, 5];
  const reversedArr = customReverse(arr, true);
  console.log(reversedArr); // Output: [5, 4, 3, 2, 1]