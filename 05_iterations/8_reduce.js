// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// The reduce() function takes two parameters:
// The first parameter is a callback function that is executed on each element of the array.
// The second parameter is the initial value for the accumulator, in this case, 0

// The reduce() method in JavaScript is used to iterate over an array and accumulate a single result by applying a provided function to each element of the array, resulting in a single output value. It condenses or "reduces" the array to a single value.
// ---------------------------------------------------------------------------------

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);



// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);