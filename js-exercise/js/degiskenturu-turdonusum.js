let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price: ", typeof price);
console.log("streingPrice: ", typeof stringPrice);
console.log("hasPass: ", typeof hasPassword);

//string,  int-float donusturmek
let number1 = "11";
console.log("number1: ", parseInt(number1));

let number2 = "11.5px";
console.log("number2: ", parseFloat(number1));

//number veri tipinden string'e donusum
let number5 = 55;
number5 = number5.toString();
console.log(number5, typeof number5);
