// Primitive

// 7 type : String ,Number, Boolean, null, undefined, Symbol, BigInt

const score = 200
const anotherScore = 2000.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id ===anotherId);//false

// const bigNumber =3454645456454645n

// *******Reference (non primitive)
// Array, Object, Function 

const hero =['vivek','nagraj','rohan']
let myObj ={
    name:'hitesh',
    age:22,
}

const myFunction = function(){
    console.log('hello world');

}
//+++++++++++++++memory++++++

// Stack (primitive) ,Heap (Non Primitive) 

let myYoutubename='viveksolanki@0234.com'
let anothernsme = myYoutubename
anothernsme='chaiorcode@33'
console.log(myYoutubename);// viveksolanki@0234.com
console.log(anothernsme);// chaiorcode@33


let userOne = {
    email: 'vivesolanki',
    upi: 'user@ynbl',
}

let userTwo=userOne
userTwo.email='nirmal#232z'
console.log(userOne.email);// nirmal#232z
console.log(userTwo.email);// nirmal#232z