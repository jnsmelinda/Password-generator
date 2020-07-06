// Assignment Code
const generateBtn = document.querySelector("#generate");
const charSets = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "`~!@#$%^&*()_-+={}|[]:\";'<>?,./"];

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    const passwordLength = getPasswordLength();
    const selectedCharSets = getSelectedCharSets();
    const selectedChars = getSelectedChars(selectedCharSets);

    let password = generate(passwordLength, selectedChars);

    while (!isValidPassword(password, selectedCharSets)) {
        password = generate(passwordLength, selectedChars);
    }

    return password;
}

function getPasswordLength() {
    let length = prompt("Choose the length of the password between 8 and 128");
    while (length < 8 || length > 128) {
        alert("Please enter the length between 8 and 128");
        length = prompt("Choose the length of the password between 8 and 128");
    }
    return parseInt(length);
}

function getSelectedCharSets() {
    const flags = new Array(charSets.length).fill(false);
    alert("Please select what character sets would you like to include.");

    while (!flags.find((element) => element === true)) {
        if (confirm("Lowercase characters?") === true) {
            flags[0] = true;
        }
        if (confirm("Uppercase characters?") === true) {
            flags[1] = true;
        }
        if (confirm("Numerical characters?") === true) {
            flags[2] = true;
        }
        if (confirm("Special characters?") === true) {
            flags[3] = true;
        }
    }

    return flags;
}

function getSelectedChars(selectedCharSets) {
    let selectedChars = "";
    for (let i = 0; i < selectedCharSets.length; i++) {
        if (selectedCharSets[i] === true) {
            selectedChars += charSets[i];
        }
    }

    return selectedChars;
}

function generate(length, selectedChars) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

    // Uncomment the line below to see how many times the password is regenerated.
    // console.log(`password: ${password}`);

    return password;
}

function isValidPassword(pass, flagsFromInput) {
    const flagsFromPassword = new Array(charSets.length);

    for (let i = 0; i < charSets.length; i++) {
        flagsFromPassword[i] = includesAny(pass, charSets[i]);
    }

    return compareFlags(flagsFromInput, flagsFromPassword);
}

function includesAny(value, setOfCharacters) {
    for (let i = 0; i < setOfCharacters.length; i++) {
        if (value.includes(setOfCharacters.charAt(i))) {
            return true;
        }
    }

    return false;
}

function compareFlags(flagsFromInput, flagsFromPassword) {
    for (let i = 0; i < flagsFromInput.length; i++) {
        if (flagsFromPassword[i] !== flagsFromInput[i]) {
            return false;
        }
    }

    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
