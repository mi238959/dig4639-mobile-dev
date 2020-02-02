const Adder = require("./Adder.js");

let a = new Adder({
    a: 9,
    b: 6
});

a.sum();

console.log(a.render()); 