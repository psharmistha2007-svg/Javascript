function name() {
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("m");
    console.log("i");
}
name()
function add2nos(n1,n2){
   console.log(n1+n2);
}

function add2nos(n1, n2) {
    return n1 + n2;
}
const result = add2nos(3, 5);
console.log("result:", result);

function loginUserMessage(username = "Sharmistha") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("S"))
console.log(loginUserMessage("P"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 200))

const user = {
    username: "Sharmistha",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "Sharmistha",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));