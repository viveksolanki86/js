const user = {
    username:'hitesh',
    price:99,

    welcomeMassage: function(){
        console.log(`${this.username} wlcome to website`)
        // console.log(this);// this corrent context ko refer karta hai
    }

}
// user.welcomeMassage()
// user.username='sam'
// user.welcomeMassage()
// console.log(this);// node environment ke andar this empty object ko refer karta hai 
// lekin  browser ke andar global object hai bo hai window object

// function chai(){
//     let username= 'vivek'
//     console.log(this.username);// function ke andar this kam nahi karta 
// }
// chai()

// const  chai = function(){
//     let username = 'vivek'
//     console.log(this.username);
// }
// chai()

const  chai = ()=> {
    let username = 'vivek'
    console.log(this.username);
}
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2)// explisite  method se likne par peranthesis lagane hai or return nahi likhna hai  
// const addTwo = (num1,num2)=> {username:'vivek'}// undefined 
const addTwo = (num1,num2)=> ({username:'vivek'})

console.log(addTwo(3,4));