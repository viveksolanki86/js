const userEmail = 'hitesh@gdfg'
if (userEmail){
    console.log('Got the email');
}else {
    console.log('Dont have user email');
}

// falsy 
// false, 0, -0, BigInt 0n, "", null , undefined, NaN

//truthy values
// '0', 'false', 'space', ' ', [], {}, function(){}, 

// who can we chack epty Array
// const array1= []
// if (array1.length === 0){
//     console.log('Array is empty');
// }

// who can we chack an epmty object 
const emptyObj ={}
if (Object.keys(emptyObj).length ===0){
    console.log('object is empty')
}


// nullish Coalescing Operator (??) null or undefined 

let var1;
// var1 = 5 ?? 10
// var1= null?? 10
// var1 =undefined ??15
var1= null ?? 10 ?? 40
// console.log(var1);


// Terniary operator

// condition ? ture : false

const iceTeaprice = 100
iceTeaprice<=80 ? console.log('less than 80') : console.log('more than 80');


