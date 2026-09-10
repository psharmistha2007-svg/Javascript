// Dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());

let myCreatedDate = new Date(2024, 0, 24);
let myCreatedDate2 = new Date("2023, 0, 24, 5, 3");
let myCreatedDate3 = new Date("2024-01-14");
let myCreatedDate4 = new Date("01-14-2024");
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `$(newDate).getDay()} and the time`

let formattedDate = newDate.toLocaleString('default', { 
    weekday: 'long' }) + " and the time is " + newDate.toLocaleTimeString();