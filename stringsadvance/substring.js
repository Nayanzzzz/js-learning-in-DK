//substring method

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

let a="edbgfrhebfrhb";

let b=a.substring(1,6);
console.log(b)

let c=a.substring(1);
console.log(c)

console.log(a)

let z = a.substring(7,3);
console.log(z)


//Only the last:
let result = a.substring(a.length - 1);
console.log(result)

