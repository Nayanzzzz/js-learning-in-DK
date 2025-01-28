// The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.

// The locale is based on the language settings of the browser.

// The toLocaleUpperCase() method does not change the original string.

// The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).


let a ="jhkdbfjhkbde7857ef";

console.log(a.toLocaleUpperCase());

console.log(a)

let b=a.toLocaleUpperCase();
console.log(b)

//tolocalelowercase

// The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.

// The locale is based on the language settings of the browser.

// The toLocaleLowerCase() method does not change the original string.

// The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

let text = "Hello World!";
let result = text.toLocaleLowerCase();

console.log(result)
