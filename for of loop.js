let e = "cartoon";

for (const x of e) {
    console.log(x);
    
}

let ee = ["Vans", "Crocs", "Nike", "Adidas", "High heel"];

for (let p of ee) {
    console.log(p);
    // console.log(`the available shoe ${p}`);
    
}

// For --- each method

ee.forEach(p => {
    console.log("The forEach method "+ p)
})
