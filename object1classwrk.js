let baby = {
    babytype: "Human",
    babyName: "Junior",
    babyWeight: "3.5kg",
    babyState:  "Kano",
    babyComplexion: "Fair",
    babyLanguage: ["Igbo", "Hausa", "Yoruba"],
    babyToy: "Toy-gun",
    babyFood: "Milk",
    babyheight: "2feet",
    babyeyecolor: "brown",


    // let information = {
    info1: function(){
        return ("baby can speak " + " " + this.babyLanguage[0])
    },
    info2: function(){
        return "baby can crawl"
    },
    info3: function(){
        return "baby can Sleep"
    },
    info4: function(){
        return "baby can suckle"
    },
    info5: function(){
        return ("baby plays with" + " " + this.babyToy)
    }

}

console.log(baby.info1())