let animal = {
    typeOfAnimal: "dog",
    hairColor: "white",
    gender: "male",
    specieOfDog: ["German shephard","Caucasian"],
    weight: "50kg"
}

console.log("Welcome to International Vet Clinic")

for (const k in animal) {
    console.log("Dog available is ", animal[k]);

}


animal.vaccinated = true;
console.log("\n")
for (const k in animal) {
    // console.log("Dog available is", animal[k]);
    console.log("Available", k, "" , animal[k]);
}

console.log(animal.specieOfDog[0])

delete animal.hairColor;

console.log(animal)