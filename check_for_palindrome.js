// write a function that tests if a string is a palindrome


function isPalindrome(str) {
    if (typeof str !== 'string') {
      return false; // Return false if the input is not a string
    }
    const cleanStr = str.toLowerCase().replace(/\W/g, "");
    const len = cleanStr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (cleanStr[i] !== cleanStr[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("eye")); // Replace with the input you want to check
  
  