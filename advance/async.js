// console.log("hey 1")
// console.log("hey 2")
// console.log("hey 3")
// setTimeout(async()=>{
//      await console.log("hey 4")
// },1000)

// console.log("hey 5")



//promises

let a = new Promise((res,rej)=>{
    let b = Math.floor(Math.random()*10);

    if(b<5){
        return res();
    }
    else{
        return rej();
    }

})

a.then(function(){
    console.log("below");
}).catch(function(){
    console.log("above");
})