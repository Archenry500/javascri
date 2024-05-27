/**
 * toString()
 * toExponential()
 * toFixed()
 * toPrecision()
 * parseFloat()
 * Math Class
 * Math.random()
 * Math.sqrt()
 */


//toString method   :-   In this method the numbers will be treated/converted to string.


let aa = 87;
let bb = 13;
let cc = aa.toString() + bb.toString();
console.log(cc);




//toExponential method()

let cd = 21;
console.log(cd.toExponential(2))

//toFixed()

let rr = 25.484345;
console.log(rr.toFixed(2))

//toPrecision()   here this method can be precised from the number of the whole number up words, like here whole is 3 digits so it precise number from 3 upwards

let pp = 238.7756887;
//console.log(pp.toPrecision(6))
console.log(pp.toPrecision(3))

//toparseInt()    it converts the inputed string into a number before execution.
// let ll = parseInt(prompt("Enter a number"));
// console.log(ll*2);

let ii = 5334 * Math.random();
console.log(ii.toPrecision(4))