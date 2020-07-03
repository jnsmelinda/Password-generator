// Assignment Code
var generateBtn = document.querySelector("#generate");
const charSet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "`~!@#$%^&*()_-+={}|[]\:\";\'<>?,./"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var length = getLength();
    var flag = getFlags();
    var set = getSet(flag);
    console.log(set);

    var result = "";
    // while (!validate(result, set)) {
    //     for (i = 0; i < length; i++) {
    //         result += set.charAt(Math.floor(Math.random() * set.length));
    //     }
    // }

    // console.log(result.length);
    // console.log(validate(result, set));
    return result;
}

function getSet(flag) {
    var set = "";
    for (i = 0; i < flag.length; i++) {
        if (flag[i] === true) {
            set += charSet[i];
        }
    }
    return set;
}

function generate() {

}

function getLength() {
    var length = prompt("Choose the length of the password between 8 and 128");
    while (length < 8 || length > 128) {
        alert("between 8 and 128");
        length = prompt("length between 8 and 128");
    }
    return parseInt(length);
}

function getFlags() {
    var flag = new Array(4).fill(false);
    alert("Please select what caracter types would you like to include.");

    while (!flag.find(element => element === true)) {
        if (confirm("Lowercase caracters?") === true) {
            flag[0] = true;
        }
        if (confirm("Uppercase caracters?") === true) {
            flag[1] = true;
        }
        if (confirm("Numerical caracters?") === true) {
            flag[2] = true;
        }
        if (confirm("Special caracters?") === true) {
            flag[3] = true;
        }
    }

    console.log(flag);

    return flag;
}

function validate(result, set) {
    for (i = 0; i < result.length; i++) {
        return (27 > set.indexOf(result.charAt(i)) >= 0 || 52 > set.indexOf(result.charAt(i)) >= 27 || 62 > set.indexOf(result.charAt(i)) >= 52 || set.length > set.indexOf(result.charAt(i)) >= 62);
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
