//use on array

let dish = ["a","b","c","d"];

dish.forEach(function(value){
    console.log(value);
})


//object inside array

 let blocklist =[{name:"harry",reson:"copyright"},{name:"over",reson:"absue"}];

for(let i=0; i<blocklist.length; i++){
    const v = blocklist[i];
    console.log(`${v.name} block for ${v.reson}` );
}

// iterate(blocklist)

// blocklist.forEach((v)=>v.name)

// function iterate (value){

//     if(Array.isArray(value)){
//         for(let i=0; i<value.length; i++){
//             console.log(`${value[i].name} block for ${blocklist[i].reson}` )
//         }
//     }

// }

blocklist.forEach(function(value){
    console.log(`${value.name} and ${value.reson} `)
})