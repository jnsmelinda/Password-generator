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
    var length = parseInt(getLength());
    var set = chooseCharSets();

    var result = "";
    for (i = 0; i < length; i++) {
        result += set.charAt(Math.floor(Math.random() * set.length));
    }

    console.log(result);
    console.log(validate(result, set));
    return result;
}

function getLength() {
    var length = prompt("length between 8 and 128");
    while (length < 8 || length > 128) {
        alert("between 8 and 128");
        length = prompt("length between 8 and 128");
    }
    return length;
}

function chooseCharSets() {
    var selectedSet = charSet[0];
    if (confirm("upper?") === true) {
        selectedSet += charSet[1];
    }
    if (confirm("num?") === true) {
        selectedSet += charSet[2];
    }
    if (confirm("special?") === true) {
        selectedSet += charSet[3];
    }

    return selectedSet;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);