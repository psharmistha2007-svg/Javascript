const dc = ["Nightwing", "Red Hood", "Robin",]
const marvel = ["Spiderman", "Ironman", "Hulk",]
dc.push(marvel) //add marvel array to the end of dc array
console.log(dc);
console.log(dc[3][1]); //accessing the second element of the marvel array inside dc array
const all = dc.concat(marvel) //concatenate dc and marvel arrays into a new array
console.log(all);
const newheros = [...dc, ...marvel] //spread operator to create a new array with all elements from dc and marvel
console.log(newheros);
const array = [1,2,[3,4],[5,[6,7]]]
const realarr = array.flat(Infinity) //flatten the array to a depth of infinity
console.log(realarr);

console.log(Array.isArray("Sharmistha"));
console.log(Array.from("Sharmistha")); //create an array from a string
console.log(Array.from({Name: "Sharmistha"})); //create an array from an object

let score = 200
let score2 = 400
let score3 = 600
console.log(Array.of(score, score2, score3)); //create an array from individual values