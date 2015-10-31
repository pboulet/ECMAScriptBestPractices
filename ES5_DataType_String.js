// convert a number to a string
var num = 5;
var str = String(num);

// convert a string to a number
num = +str;

// when using parseInt, we should always pass the radix
// for example, this number is in base 10
var baseTenStr = "08";
var num = parseInt(baseTenStr, 10);

