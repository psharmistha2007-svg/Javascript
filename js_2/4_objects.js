const x = {} // nonsingleton
x.id = "12ab"
x.name = "Sharmistha"
x.isloggedin = false
console.log(x);

const y = {
    email: "sharmistha@gmail.com",
    fullname: {
        userfullname: {
            fn: "Sharmistha",
            ln: "Paul"
        }
    }
}
console.log(y.fullname.userfullname.fn);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

//const obj3 = (obj1, obj2)

const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2, obj5) //guaranteed result

console.log(obj3);
console.log(obj4);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

const user = [
    {
        id: 24,
        email: "sharmi@gmail.com"
    },
    {
        id: 23
    }
]

user[1].email
console.log(x);
console.log(Object.keys(x));
console.log(Object.values(x));
console.log(Object.entries(x));
console.log(x.hasOwnProperty('isloggedin'));

const course = {
    coursename: "js",
    price: "500",
    instructor: "Sharmistha"
}

const {instructor: instruc} = course
console.log(instruc);

const navbar = ({ company }) => { //destructuring

}
navbar({company: "Sharmistha"})

const obj = {
    name: "Sharmistha",
    coursename: "js",
    price: "200"
}
[
    {},
    {},
    {}
];