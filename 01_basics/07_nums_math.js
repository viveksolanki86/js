const score  = 400
// console.log(score);

const balance= new Number(100)
// console.log(balance);//[number: 100]
// console.log(balance.toString());//100 
// console.log(balance.toFixed(2));//100.00


const otherNumber = 123.8956
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//************************math****************** */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.max(2,3,4,5,7,66,7))
// console.log(Math.min(2,3,4,5,7,66,7))

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));


const min = 10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min);