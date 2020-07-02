// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "`~!@#$%^&*()_-+={}|[]\:\";\'<>?,./"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword(getLength(), chooseCharSets());
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


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
    var selectedSet = [charSet[1]];
    if (confirm("upper?") === true) {
        selectedSet.push(charSet[0]);
    }
    if (confirm("num?") === true) {
        selectedSet.push(charSet[2]);
    }
    if (confirm("special?") === true) {
        selectedSet.push(charSet[3]);
    }
    return selectedSet;
}

function generatePassword() {
    var passWord = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
