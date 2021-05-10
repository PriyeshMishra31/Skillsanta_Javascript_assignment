function checkPalindrome(str) {


    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = prompt('Enter a string: ');


const value = checkPalindrome(string);

document.write(value, "</br>");

function reverseString(str) {

    
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const string1 = prompt('Enter a string: ');

const result = reverseString(string1);
document.write(result);