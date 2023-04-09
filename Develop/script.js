// Assignment Code

// Main Function
function generatePass() {
    
    // Need the following variables:
    // Array of lowercase letters
    // Array of uppercase letters
    // Array of numbers
    // Array of special characters
    // Empty array to hold selected characters
    // Variable to hold the created password
    var lowercaseLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    var uppercaseLetters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialChar = [
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "_",
        "]",
        "^",
        "|",
        "`",
        "{",
        "|",
        "}",
        "~",
    ];
    var selectedArray = [];
    var createdPass = "";

    // Prompt for password length --> stored in a variable
    var passLength = prompt (
        "How many characters would you like in your password?"
    );

    // Validate user input --> if user chooses < 8 or > 128, alert that they need to choose a valid password length
    if (passLength < 8 || passLength > 128) {

        alert (
            "Please choose a specified number from 8 to 128.Please start over."
        );
        return;
    }

    // Loop for character types
    // Prompt --> Do they want lowercase letters?
    // Prompt --> Do they want uppercase letters?
    // Prompt --> Do they want numbers?
    // Prompt --> Do they want special characters?
    else {
        if (confirm("Would you like lower case letters in your password?")) {
            Array.prototype.push.apply(selectedArray, lowercaseLetters);
        }

        if (confirm("Would you like upper case letters in your password?")) {
            Array.prototype.push.apply(selectedArray, uppercaseLetters);
        }
        
        if (confirm("Would you like numbers in your password?")) {
             Array.prototype.push.apply(selectedArray, numChar);
        }

        if (confirm("Would you like special characters in your password?")) {
            Array.prototype.push.apply(selectedArray, specialChar);
        }
        
        if (selectedArray.length === 0) {
            alert("You must choose atleast one character for your password.");
        }
    }

    // Run loop to validated information and create the password
    for (var i = 0; i < passLength; i++) {
        var random = Math.floor(Math.random() * selectedArray.length);
        createdPass += selectedArray[random];
    }

    // Retrieves created password and displays it
    document.getElementById("password").innerHTML = createdPass;

}

// Calls generatePass function
var buttonEl = document.querySelector("button#generate");
buttonEl.addEventListener("click", () => {
    generatePass();
});