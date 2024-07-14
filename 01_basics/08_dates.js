// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof(myDate));

// let MyCreatedDate = new Date(2023,0,23)
// let MyCreatedDate = new Date(2023,0,23,5,3)
// let MyCreatedDate = new Date("2023-01-14")
let MyCreatedDate = new Date("01-14-2024")
// console.log(MyCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(MyCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{

    weekday:'long'
})