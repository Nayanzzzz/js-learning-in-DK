let a = [{id:1,name:"hi"}, {id:2,name:"ok"}];

let b=a.find(val=>{
    return val.id === 1;
})
console.log(b)