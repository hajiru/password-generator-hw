// Assignment Code

// Main Function
function generatePass() {
    
    // Need the following variables:
    // array of lowercase letters
    // array of uppercase letters
    // array of numbers
    // array of special characters
    // to hold the password we're building
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
    var passLength = prompt(
        "How many characters would you like in your password?"
    );

    // Validate user input --> if user chooses < 8 or > 128, alert that they need to choose a valid password length
    if (passLength < 8 || passLength > 128) {

        alert(
            "Please choose a specified number from 8 to 128. Please try again."
        );
    }

}
