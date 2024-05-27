let cus_userName = prompt("Hello,  What is your name ?")
alert(`Welcome to Aptech Canteen  ${cus_userName} \n You have 10000 Units. `)

let avbl_bal = 10000
var userChoice = 
    prompt("\'Menu\'\n Choose your preferred snack \n Coke         \'3500\' units \n Meatpie     \'5000\' units \n Bottle_water \'2500\' units \n Cup_Cake    \'12500\' units")
    if (userChoice == "Coke") {
        alert(`Coke\n Your balance is ${avbl_bal - 3500} units.`)
    } else if (userChoice == "Meatpie") {
        alert(`Meatpie\n Your balance is ${avbl_bal - 5000} units.`)
    } else if (userChoice == "Bottle_water") {
        alert(`Bottle_water\n Your balance is ${avbl_bal - 2500} units.`)
    } else if (userChoice == "Cup_Cake") {
        alert(`Cup_Cake\n Sorry your balance is ${avbl_bal} units\n You can not afford Cup_Cake`)
    } else {
        alert("Please choose from the above listed Menu.")
    }
    
   