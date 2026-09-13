const myArr = [0,1,2,3,4,5]
const myHeros = ["spiderman", "ironman"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods
myArr.push(6) //add to the end
myArr.pop() //remove from the end
myArr.push(7) //add to the end
myArr.unshift(9) //add to the beginning
myArr.shift() //remove from the beginning
console.log(myArr.includes(9)); //check if the array includes a value
console.log(myArr.indexOf(3)); //get the index of a value

const newArr = myArr.join() //join the array into a string
console.log(myArr);
console.log(newArr);

// slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3) //slice the array from index 1 to 3 (not including 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) //splice the array from index 1 to 3 (including 3)
console.log("c", myArr);
console.log(myn2);