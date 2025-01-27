//function pass in function as argument

let upperCase = (str)=>{
    return str.toUpperCase();
}

let lowerCase = (str)=>{
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}

console.log(transformer("hello",upperCase))
console.log(transformer("HELLO",lowerCase))


//function return another function

let print = function(check){
    
    return function(msg){
       check && console.log(msg)
    }
}

const echo = print(true);

echo("Hi")
echo("wow")
echo("Hi")
echo("Hi")
echo("Hi")
echo("Hi")
echo("Hi")
echo("Hi")


//IIFI FUNCTION 


(function() {
    console.log("This is an IIFE!");
})();

