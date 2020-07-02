// Assignment Code
var generateBtn = document.querySelector("#generate");
const charSet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "`~!@#$%^&*()_-+={}|[]\:\";\'<>?,./"];

// Write password to the #password input
function writePassword() {
    console.log(getLength());
    console.log(chooseCharSets());
    var password = generatePassword();
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

}

function generatePassword() {
    var passWord = "";


    console.log(charSet[0]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
