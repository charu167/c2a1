/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  let str1 = str.toLocaleLowerCase().replace(/[^a-zA-Z]/g, '')
  console.log(str1)
  let l1 = str1.length
  let l2 = Math.floor(l1 / 2)

  console.log(str1)

  for (let i = 0; i < l2; i++) {
    if (str1[i] != str1[l1 - 1 - i]) {
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
