const student={
    firsName:"nayan",
    marks:99,
    printMarks:function(){
        console.log(this.marks);
    }
}


//prototype 
const student1 ={
 firstName:"zero",
 marks:98   
}


student1.__proto__=student;

//class is a program code template for creating a object 
//those object will have some state(variables)&some behaviour (function)inside it 

class Toyota{

    constructor(name){
        this.name=name;
        console.log("constructer called")
    }

    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortunar = new Toyota("heavy");
fortunar.setBrand("hilux");



