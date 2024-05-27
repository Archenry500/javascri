//the string lenth method

let p = "This is my string";
console.log(p.length)


//extracting parts of a string

/** 
 * slice()
 * substring()
 * substr()
 * using array method
 * .includes
 * */



// let rb = "Hello and Good morning."
// let rb2 = rb.slice(0,7)
// console.log(rb2)

// let rb = "Hello and Good morning."
// let rb2 = rb.slice(7)
// console.log(rb2)

// let rb = "Hello and Good morning."
// let rb2 = rb.slice(-7)
// console.log(rb2)

//Substring()  method    here you can not use a negative sign on it . when you do it will automatically print all sentence.

// let rb = "Hello and Good morning."
// let rb3 = rb.substring(0, 7)
// console.log(rb3)

// let rb = "Hello and Good morning."
// let rb3 = rb.substring(7)
// console.log(rb3)

// let rb = "Hello and Good morning."
// let rb3 = rb.substring(-7)
// console.log(rb3)


// Substr()  method:-  here we are required to  start set 2 number argument in which our execution will start with the first number letter and print out the letters of second number argument.

// let rb = "Hello and Good morning."
// let rb4 = rb.substr(4, 6)
// console.log(rb4)


// Using incudes  :-  here we

// if (rb.includes("morning")) {
//     let rb5 = rb.replace("morning", "night");
//     console.log(rb5); 
// } else {
//     console.log("string not found")
    
// }

let rb = "Hello and Good morning."
if (rb.includes("morning")) {
    let rb5 = rb.replace("morn", "night");
    console.log(rb5); 
} else {
    console.log("string not found")
    
}

console.log(rb.includes("Good"))
console.log(rb.startsWith("Hello"))
console.log(rb.endsWith("morning."))


// Using .toUpperCase   and .tolowerCase

//  let tt = "i live in the city of abuja"
// //.toUpperCase  
// let t2 = tt.toUpperCase();
// console.log(t2)


let tt = "I LIVE IN THE CITY OF ABUJA"
// //.tolowerCase
// let t2 = tt.toLowerCase();
// console.log(t2)


// Usinfg the split()  and join()

let t3 = tt.split("I");
console.log(t3)




















