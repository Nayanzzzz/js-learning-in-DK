class animal{

    constructor(name){
        this.name=name;
        console.log("u are making  an animal")
    }
    walk(){
        console.log("walking")
    }
    sleep(){
        console.log("sleeping")
    }
    eat(){
        console.log("animal is eating")
    }
    
    get _name(){
        return this.name.toUpperCase();
    }

    set _setName(newName){
        if(typeof newName === "string"){
            return this.name=newName
        }
        else {
            console.error("Invalid name! Name must be a non-empty string.");
          }
    }
}



class Herbivores extends animal{
    constructor(name){
        super(name);
        console.log("making an animal which are herbivore type")
    }
    eat(){
        console.log("Eat only plants, such as leaves, fruits, roots, and flowers");
    }
}


class Carnivore extends animal{
    constructor(name){
        super(name)
        console.log("making an animal which are carnivore type ")
    }

    eat(){
        console.log("mostly eats meat, or the flesh of animals")
    }
}

let lion = new Carnivore("lion");
console.log((lion.name))
lion.eat();
lion.sleep();
lion.name

console.log(lion._name)
lion._setName = "tiger";
console.log(lion._name)

