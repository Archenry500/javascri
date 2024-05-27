// THIS IS WHILE LOOP

//  this program will count numbers

// let num = 0;   // initial variable 
// while (num <= 12){   //condition to test for
//     alert(num);
//     if (num == 6){
//         alert("You are half way through")
//     }
//     num = num + 1;  // incrementing statement
// }


let lastNumb = Number(prompt("put in your number"));// using user input 
let num = 0;
while (num <= lastNumb){  
    alert(num);

    if (num == 6){
        alert("You are half way through")
    }
    num = num + 1;  
}