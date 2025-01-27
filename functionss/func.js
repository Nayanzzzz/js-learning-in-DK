//function  

//simply piece of code which we can use in our progrma many times

//just like a variable holding some piece of code 

// decalaation.

function wow(){
    console.log("u are looking beautiful");
}

wow();


//function expression
 let fun = function(){
    console.log("u are doing fun in coding");
 }
 //calling function expression
 fun();

 //real example
 let invitation = function(name){
    console.log(`u are invited in party ${name}`)
 }
 invitation("hari")


 //return value from the function

 let ageCalculator=function(currentYear , birthYear){
    return `your current age is ${currentYear - birthYear}`
 }

 console.log(ageCalculator(2025,2003));