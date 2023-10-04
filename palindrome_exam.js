// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
    // Your codes here. 
    if (typeof str !== 'string') {
    console.log(`The given value: '${str}' is not a string! The expected data type of the value is string.`);
    return;
    }
    const myStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    const reversedStr = myStr.split('').reverse().join('');

    if (myStr === reversedStr) {
    console.log(`The given string: '${str}' is an example of a palindrome, the reversed value is: '${reversedStr}'`);
    } else {
    console.log(`The given string: '${str}' is not an example of a palindrome`);
    }
}

// Call the function and pass an argument.
isPalindrome("ababa"); //example of palindrom string
isPalindrome("mabuhay"); //example of not palindrom string
isPalindrome(123456); //example of not string