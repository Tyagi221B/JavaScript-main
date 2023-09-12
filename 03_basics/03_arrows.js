const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);              // cannot access 'this' inside function 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2           // Implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )        // If we use curly brackets then we have to use 'return' word , but if we dont then there is no need

const addTwo = (num1, num2) => ({username: "hitesh"})    // Lekin agar hume object return karna hai to braces lagane hi padde ge , kyo ki object ke liye curly braces to hote hi hai


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()