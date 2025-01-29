class parent{

    constructor(){
        console.log("parent class constructor called")
    }
    hello(){
        console.log("hello");
    }
}

class child extends parent{

    constructor(branch){
        super();
        this.branch =branch;
    }

    hi(){
        console.log("hi");
    }

}   
    

let a=new child("btecch");
console.log(a.hi());
console.log(a.branch);


