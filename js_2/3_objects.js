const sym = Symbol("key1")
const user = {
    Name: "Sharmistha",
    [sym]: "key1",
    age: 22,
    location: "Kolkata",
    email: "sharmistha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"]
}
console.log(user[sym]); //accessing the value of the symbol key in the user object
user.email = "sharmi@gamil.com" //updating the value of the email key in the user object
Object.freeze(user) //freezing the user object to prevent any further modifications
user.email = "Sharmi@gamil.com" //trying to update the value of the email key in the user object after freezing it
console.log(user);

user.greeting = function() { //adding a new method to the user object
    console.log("Hi user"); //using the this keyword to access the Name property of the user object
}
console.log(user.greeting()); //calling the greeting method of the user object 

user.greeting2 = function() {
    console.log(`Hi user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());