//(? :)

let age=20;
if(age>18){
    console.log("pass");
}else{
    console.log("fail")
}
let a = age>18?"pass":"fail"
console.log(a)


let weight=25;
let height=26;

let res = weight>40 ? height>25 ? "pass":"height issue" : "weight issue";
console.log(res)