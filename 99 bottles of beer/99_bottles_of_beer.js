var bottles = 99;
var zero = "no more";
while (bottles > 1) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " 
    + --bottles + " bottles of beer on the wall");
}

console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " + zero + " bottles of beer on the wall");
console.log(zero.slice(0,1).toUpperCase() + zero.slice(1, ) + " bottles of beer on the wall, " + zero + " bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
