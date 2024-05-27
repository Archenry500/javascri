let ar = ["Tesla", "Toyota", "Honda", "Innoson", "BMW"];
console.log(ar);


ar.shift();   // the shift method
console.log(ar);


ar.unshift("Nord");  // unshift adds from the front
console.log(ar)



ar[3] = "Hyundai"    // we can chnge a specific element in the list with number location.
console.log(ar);
//console.log(ar[3] = "Hyundai")
//console.log(ar);



let dd = Number(prompt("remove an item, enter number"));
let ddd = prompt("Enter new item");
if(dd > ar.length) {
    alert("Index not found")
    console.clear()  
} else {
    let ddd = prompt("Enter new item");
    ar[dd] = ddd;
    alert("Items added succesfully");
    console.log(ar);
}

