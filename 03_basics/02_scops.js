let a =500
if(true){
    let a=10
    const b=20
    var c= 30
    // console.log('innner',a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested scop 

function one(){
    const userrname='vivek'
    function two(){
        const website= "yotube"
        console.log(userrname);
    }
    // console.log(website);//erroe
    two()
}
// one()

if(true){
    const username ='vivek'
    if(username==='vivek'){
        const website=' youtube'
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

// *******************Interesting*********************

console.log(addOne(5))
function addOne(num){
    return num+1
}

// addTwo(5)// we can not access before  initialization the
const addTwo= function(num){
    return num+2
}
