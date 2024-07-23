function sayMyName(){console.log('v');
console.log('i');
console.log('v');
console.log('e');
console.log('k');}
// sayMyName// refrence 
// sayMyName()// execution

// function addtwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// function addtwoNumber(number1,number2){
//     let result = number1+number2
//     return result
// }
function addtwoNumber(number1,number2){
    return number1+number2
}
const result=addtwoNumber(3,5)
// console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log('please enter a username');
        return
    }
     return `${username} just logged in`
}
// console.log(loginUserMessage('vivek'));
// console.log(loginUserMessage());

function calclateCartPrice(var1,var2, ...num1){
    return num1
}
// console.log(calclateCartPrice(100,393,45,454));
// ...variable name is a rest operator which take all value of input and store that value in a array

const user ={
    username:'hitesh',
    price:199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and name is ${anyobject.price} `)
}

// handleObject(user)
handleObject({
    username:'vivek solanki',
    price:399
})

const myNewArray = [200,330,400,454,5]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,45,454]))