//THIS IS FOR LOOP

// num = num + 1   // is the same as
// num ++   // same as seen above

// for (let index = 0; index < 12; index++) {
//     alert(index);
    
// }


// for in loop


let stock = {           //this is an object
    goodName: "Rice",
    size: "50kg",
    quality: "Local rice",
    harvestedfrom: "Ebonyi",
    price: 84000
};

let shoes = ["Vans", "Crocs", "Nike", "Adidas", "High heel"];

console.log(stock.size)

for (let a in stock) {  //object for--in loop
        //  console.log(stock[a]);
        //  console.log(`The key ${a}: the value of that key is ${stock[a]}`);
}

for (let b in shoes) {     //array for--in loop
    // console.log(shoes[b])
    console.log("Shoes available are", shoes[b]);
}

