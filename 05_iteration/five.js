const coding =['js','ruby','java','python','cpp']

// coding.forEach(  function (value){
//     console.log(value);
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item ,index,arr)=>{
//    console.log(item,index,arr);
// })

const myCoding =[
    {
        languageName:'javascript',
        languageFilename:'js'
    },
    {
        languageName:'java',
        languageFilename:'java'
    },
    {
        languageName:'python',
        languageFilename:'py'
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})
