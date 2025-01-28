//charcode at method & codepointat method

// charCodeAt() is UTF-16, codePointAt() is Unicode.

// charCodeAt() returns a number between 0 and 65535.

// Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).

let a="abcdefg";
let b=a.charCodeAt(5);
console.log(b)

let c=a.codePointAt(5);
console.log(c)