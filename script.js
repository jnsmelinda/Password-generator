// Assignment Code
var generateBtn = document.querySelector("#generate");
const charSets = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "`~!@#$%^&*()_-+={}|[]\:\";\'<>?,./"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var length = getLength();
    var flags = getflags();
    var selectedChars = getSelectedChars(flags);

    var password = generate(length, selectedChars);

    while (!isValidPassword(password, flags)) {
        password = generate(length, selectedChars);
    }

    return password;
}

function isValidPassword(pass, inputFlags) {
    var flags = new Array(charSets.length);

    for (var i = 0; i < charSets.length; i++) {
        flags[i] = containsAny(pass, charSets[i]);
    }

    for (var i = 0; i < flags.length; i++) {
        if (flags[i] !== inputFlags[i]) {
            return false;
        }
    }

    return true;
}

function containsAny(value, setOfCharacters) {
    for (var i = 0; i < setOfCharacters.length; i++) {
        if (value.includes(setOfCharacters.charAt(i))) {
            return true;
        }
    }

    return false;
}

function getSelectedChars(flags) {
    var selectedChars = "";
    for (var i = 0; i < flags.length; i++) {
        if (flags[i] === true) {
            selectedChars += charSets[i];
        }
    }

    return selectedChars;
}

function generate(length, selectedChars) {
    var result = "";
    for (var i = 0; i < length; i++) {
        result += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

    // console.log("password: " + result);

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

function getflags() {
  var flags = new Array(charSets.length).fill(false);
    alert("Please select what caracter sets would you like to include.");

    while (!flags.find(element => element === true)) {
        if (confirm("Lowercase caracters?") === true) {
            flags[0] = true;
        }
        if (confirm("Uppercase caracters?") === true) {
            flags[1] = true;
        }
        if (confirm("Numerical caracters?") === true) {
            flags[2] = true;
        }
        if (confirm("Special caracters?") === true) {
            flags[3] = true;
        }
    }

    return flags;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
