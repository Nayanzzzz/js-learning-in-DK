// method:functoin written in object it call method for that particular object


let public={
    ageCalculate : function(birthyear = 2005){
        let age = 2025 - birthyear 
        return age
    }
}

console.log(public.ageCalculate(2003))

//here ageCalculate is method forpublic object


//this keyword

let cricket={
    firstName:"tilak",
    lastName:"varma",
    city:"bombay",
    education:"enginnering",
    getSummary : function(){
        return `${this.firstName} ${this.lastName} is live in ${this.city} for cricket`
    }
}

console.log(cricket.getSummary());