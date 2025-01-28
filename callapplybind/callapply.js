//we can manualy set the value of "this" keyword using call and bind

let mainPlain = {
    airlineName : "airindia",
    iatacodeName : "AI",
    bookings:[],
    book:function(name,flightNum){
        console.log(`u are mostwelcome ${name} at ${this.airlineName} where flightnum : ${flightNum}${this.iatacodeName}`)
        this.bookings.push(`${name} welcome ${this.airlineName}`)
    }
}

mainPlain.book("zero",123);
mainPlain.book("gero",3);
console.log(mainPlain)

let childPlain={
    airlineName:"indigo",
    iatacodeName:"IG",
    bookings:[]
}
let book=mainPlain.book;

book.call(childPlain,"harry",544);
console.log(childPlain);

book.apply(childPlain,["oaky",654])