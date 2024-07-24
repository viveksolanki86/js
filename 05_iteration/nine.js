const myNums=[1,2,3]

// const myTotl =myNums.reduce( function(acc ,curval){
//     console.log(`acc: ${acc} and curval :${curval}`);
//     return acc+curval
// },0)

// const myTotal = myNums.reduce( (acc,curval)=> acc+curval,0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:'js course',
        price:4999
    },
    {
        itemName:'python',
        price:999
    },
    {
        itemName:'mobile dev course',
        price:49997
    },
]

const priceToPay = shoppingCart.reduce( (acc,item)=> acc+item.price,0)
console.log(priceToPay);