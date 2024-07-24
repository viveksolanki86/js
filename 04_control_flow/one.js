// if

const isUserLoggedIn = true
const tempreture = 41
// if (tempreture === 40){
//     console.log('less than 50');   
// } else {
//     console.log('tempreture gater than 50');
// }

// < ,> ,>=  , <= , == , != , === type chacking ,!==

// const score =200
// if (score >100){
//     const power = 'fly'
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //error becouse of scope uska declaration us scope ke bad khatam ho jaega

const balance = 1000
// if (balance >500) console.log('test');// implesite scope ek line me executee hone bala scope jisme curly brases lagane ki jarurt nahi rahti
// , lagage multiplr line bhi likh sakte hai

// Nesting 

// if (balance <500){
//     console.log('less than 500');
// }else if(balance< 750){
//     console.log('less than 750');
// }else if (balance< 900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1200');
// }

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEail = true


if (userLoggedIn && debitCard  && 2!=2){
    console.log('allow to buy corses');
}

if (loggedInFromGoogle || loggedInFromEail){
    console.log('user logged in');
}
