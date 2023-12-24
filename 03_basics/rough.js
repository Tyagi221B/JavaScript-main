function x(){
    var x = 10;
    function y(){
        console.log(x);
    }
    y();
    return y;
}

var z = x();
z();