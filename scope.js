let x = 10;   //Global variable
if (true){
    let y =32;  //  local variable
    var z = 13;  // global variable
    alert(`The answer is ${y + z}`);
}

alert(`Second answer is ${x + z}`);