/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = -1000
    if(numbers.length == 0){
        return undefined
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }

    // console.log(max)
    return max
}

module.exports = findLargestElement;