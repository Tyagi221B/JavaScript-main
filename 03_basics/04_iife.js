// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);           // <-------------------Function rap kiya () <- isme or fir bhar execution ke liye () <- y elaga diya 
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')





//why we use iife ?
//to get protection from global pollution .