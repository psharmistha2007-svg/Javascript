var c=300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER:", a);
    console.log(b);
}
console.log(a);
console.log(c);

function one() {
    const username = "Sharmistha"

    function two() {
        const website = "yt"
        console.log(username);
        console.log(website);
    }
    two()
}
one()

if (true) {
    const username = "Sharmistha"

    if (username === "Sharmistha") {
        const website = "yt"
        console.log(username + website);
    }
}
console.log(addone(5))

function addone(n) {
    return n + 1
}
const addtwo = function(n) {
    return n + 2
}
console.log(addtwo(5));