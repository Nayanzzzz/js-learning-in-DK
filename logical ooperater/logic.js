//logical operater

//&& , || , ! 

let password = "afdede@";

if(password.length > 5 && password.includes("@")){
    console.log("your password is ",password)
}else{
    console.log("your password is not fullfill requirements")
}


let pass = "ade@";

if(password.length > 5 || password.includes("@")){
    console.log("your password is ",password)
}else{
    console.log("your password is not fullfill requirements")
}


//priorities

//not(!) , 
//AND OR from left to right

let result = true && true || false && !false
console.log(result)