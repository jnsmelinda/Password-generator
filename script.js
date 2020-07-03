// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "`~!@#$%^&*()_-+={}|[]\:\";\'<>?,./"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var length = getLength();
    var set = chooseCharSets();

    var result = "";
    while (!validate(result, set)) {
        for (i = 0; i < length; i++) {
            result += set.charAt(Math.floor(Math.random() * set.length));
        }
    }

    // console.log(result.length);
    // console.log(validate(result, set));
    return result;
}

function getLength() {
    var length = prompt("Choose the length of the password between 8 and 128");
    while (length < 8 || length > 128) {
        alert("between 8 and 128");
        length = prompt("length between 8 and 128");
    }
    return parseInt(length);
}

function chooseCharSets() {
    var selectedSet = "";
    alert("Please select what caracter types would you like to include.");

    while (selectedSet.length === 0) {
        if (confirm("Lowercase caracters?") === true) {
            selectedSet += charSet[0];
        }
        if (confirm("Uppercase caracters?") === true) {
            selectedSet += charSet[1];
        }
        if (confirm("Numerical caracters?") === true) {
            selectedSet += charSet[2];
        }
        if (confirm("Special caracters?") === true) {
            selectedSet += charSet[3];
        }
    }

    // console.log(selectedSet);

    return selectedSet;
}

function validate(result, set) {
    for (i = 0; i < result.length; i++) {
        return (27 > set.indexOf(result.charAt(i)) >= 0 || 52 > set.indexOf(result.charAt(i)) >= 27 || 62 > set.indexOf(result.charAt(i)) >= 52 || set.length > set.indexOf(result.charAt(i)) >= 62);
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
