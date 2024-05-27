

alert("This program wil allow you to: \n1. convert to uppercase. \n2. convert to lowerCase. \n3. Replace selected text")

let uText = prompt("Enter the text to analyze");

let uResp = prompt("What will you like to be done, on the text?\n For converting to lowerCase, type 'L.' \nFor converting to uppercase 'U' \nFor replacig text 'R'");

if (uResp == 'L' || uResp == 'l') {
    function userlower(tt) {
        let newText =  tt.toLowerCase();
        return newText;
    }
    alert(userlower(uText));
} else if (uResp == 'U' || uResp == 'u'){
    function userUpper(tb) {
        let newTxt =  tb.toUpperCase();
        return newTxt;
    }
    alert(userUpper(uText));
} else if (uResp == 'R' || uResp == 'r') {
     if (uText.includes(uText)) {
          let td = uText.replace(uText, "Replaced succesful");
           alert(td); 
     }
} else {
    alert("Invalid option")
}