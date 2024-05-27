/**
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * using  splice and slice to add or remove items
 */


// Join method    //  joins the word as seen bellow to each word in the list.
let arr =["Abia State ", "Ebonyi State ", "Babcock ", "Nile "];
console.log(arr)
let arr2 = arr.join("university")
console.log(arr2);


//console.log(arr.pop());                  // removes from the back of the list
let arr3 = arr.pop();
console.log(`removed element ${arr3}`);
console.log(`The original array showing removed element ${arr}`);

arr.push("American University");   // push adds from the back.
console.log(arr)
