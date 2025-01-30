console.log("hey 1")
console.log("hey 2")


async function abc(){
    let v = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

    console.log("hey 3")
    console.log("hey 4")
    return v;
}
abc();



