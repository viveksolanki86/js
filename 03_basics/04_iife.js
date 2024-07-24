// i=Immediately Invoked Function Expression
(
function chai(){
    // Named iife
    console.log(`db connected`);
})();
// ()()   jo function imidiatly exicute ho jaye or kai bar global scop ke polution se dikkat hoti hai kai bar us polution ko hatane ke lie iife ka use kiya 

( (name)=> {
    console.log(`db connected two ${name}`);
})('vivek')
