let cart = [{
    name:"mobile",
    price:1000,
    qty:2
},{
    name:"tablate",
    price:2000,
    qty:3
}]

let newCart = cart.flatMap(item=>{
    if(item.name == "mobile"){
        return [item,
            {
                name:"scree",
                price:0,
                qty:1
            }
        ]
    }
    return [item]
})

console.log(newCart)