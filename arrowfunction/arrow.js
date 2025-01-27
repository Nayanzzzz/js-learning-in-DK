const a =()=>{
    console.log("u are doing great things")
}

a();

//normal 
let invitation = (name)=>{
    console.log(`u are invited ${name}`)
}
    
invitation("zero");

//using return

let inv = (name)=>{
    return `u are invited ${name}`
}
    
console.log(inv("hero"));