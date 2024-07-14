// const name = 'vivek'
// const repoCont = 40
// console.log(name + repoCont+'value');

// console.log(`hello my name is ${name} and my repo is ${repoCont}`);

const gameName = new String('hite-sh-hc')
// console.log(gameName[0]);//h

// console.log(gameName.__proto__);
// console.log(gameName.length);//8
// console.log(gameName.toUpperCase());//HITESHHC
// console.log(gameName.charAt(2));//t
// console.log(gameName.indexOf('t'))//2

const  newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,6)
console.log(anotherString);
 
const newStringOne ='   vivek    '
console.log(newStringOne);
console.log(newStringOne.trim());


const url = 'https://hitesh.com/hitesh%20choudhary'
console.log(url.replace('%20','-'));

console.log(url.includes('sundae'));

console.log(gameName.split('-'));
