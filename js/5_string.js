const name = "Sharmistha"
const repoCount = 50
console.log(name + " has " + repoCount + " Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
const gameName = new String ("Sharmistha-sp-com")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
const newString2 = " Sharmistha "
console.log(newString2);
console.log(newString2.trim());
 const url = "https://www.youtube.com/watch?v=5qap5aO4i9A"
 console.log(url.replace("youtube", "vimeo"));
 console.log(url.includes("youtube"));
 console.log(gameName.split("-"));