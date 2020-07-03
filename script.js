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
    // var flags = getflags();
    var selectedChars = getSelectedChars();
    console.log(selectedChars);

    var result = generate(length, selectedChars);
    console.log(result);


    // while (validate(result, flagss)) {
    //     console.log('regenerate...');
    //     result = generate(length, selectedChars);
    // }

    // console.log(result);
    return result;
}

function isValidPassword(password) {
    var flags = new Array(charSet.length);

    for (j = 0; j < charSet.length; j++) {
        flags[j] = containsAny(pass, charSet[j]);
    }

    console.log(flags);
}

function containsAny(value, setOfCharacters) {
    for (i = 0; i < setOfCharacters.length; i++) {
        if (value.includes(setOfCharacters.charAt(i))) {
            return true;
        }
    }

    return false;
}

// function getselectedChars(flags) {
//     var selectedChars = "";
//     for (i = 0; i < flags.length; i++) {
//         if (flags[i] === true) {
//             selectedChars += charselectedChars[i];
//         }
//     }

//     return selectedChars;
// }

function generate(length, selectedChars) {
    var result = "";
    for (i = 0; i < length; i++) {
        result += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

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

function getSelectedChars() {
    var selectedChars = "";
    alert("Please select what caracter types would you like to include.");

    while (selectedChars.length === 0) {
        if (confirm("Lowercase caracters?") === true) {
            selectedChars += charSet[0];
        }
        if (confirm("Uppercase caracters?") === true) {
            selectedChars += charSet[1];
        }
        if (confirm("Numerical caracters?") === true) {
            selectedChars += charSet[2];
        }
        if (confirm("Special caracters?") === true) {
            selectedChars += charSet[3];
        }
    }

    return selectedChars;
}


// function getflags() {
//     var flags = new Array(charselectedChars.length).fill(false);
//     alert("Please select what caracter types would you like to include.");

//     while (!flags.find(element => element === true)) {
//         if (confirm("Lowercase caracters?") === true) {
//             flags[0] = true;
//         }
//         if (confirm("Uppercase caracters?") === true) {
//             flags[1] = true;
//         }
//         if (confirm("Numerical caracters?") === true) {
//             flags[2] = true;
//         }
//         if (confirm("Special caracters?") === true) {
//             flags[3] = true;
//         }
//     }

//     console.log(flags);

//     return flags;
// }


// function validate(result, flagss) {
//     var wordflagsss = new Array(charselectedChars.length).fill(false);
//     for (i = 0; i < result.length; i++) {
//         for (j = 0; j < charselectedChars.length; j++) {
//             if (wordflagsss[j] === false && charselectedChars[j].includes(result.charAt(i))) {
//                 wordflagss[j] = true;
//             }
//             if (flags[j] !== wordflagss[j]) {
//                 return false;
//             }
//         }
//     }


//     // for (i = 0; i < result.length; i++) {
//     //     for (j = 0; j < flags.length;j++) {
//     //         if (flags[i] === true) {
//     //             if (charselectedChars[i].includes(result.charAt(i))) {
//     //                 return true;
//     //             }
//     //         }
//     //     }
//     // }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
