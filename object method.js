let country = {
    nameCountry: "Nigeria",
    capital: "Abuja",
    population: 2000000,
    continent: "Africa",
    language: ["Hausa", "Igbo", "Yoruba", "Efik", "many more"],

    info1: function(){
      return (this.nameCountry + " has a population of " + this.population + " people")
    },
    
}
 console.log(country.information());


// let calculator = {
//     add: function(x, y){
//         return x + y;
//     },
//     subtraction: function(x, y){
//         return x - y;
//     },
//     multiplication: function(x, y){
//         return x * y;
//     }
// }

// console.log(`The result of the addition is ${calculator.add(6, 17)}`);