/*
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2 
*/

// ? Solution: so, we are using hashmap
// What is being done is we are putting the value of hashmap in a direction like
// We know hashmap is basically object so, we are adding key as the data in the array and value as the number of data in the array meaning if array looks like [1,1,1,2,2,2,3,3,3]
// Hashmap will look like obj={1:3, 2:3, 3:3} and then we will compare value with array_length/2.

function GreatestElement(array) {
  const value = array.length/2;
  const obj = {};
  array.map((data) => (obj[data] = obj[data] ? obj[data] + 1 : 1));

  for (let key in obj) {
    if (obj[key] > value) {
      return parseInt(key);
    }
  }
}

console.log(GreatestElement([2, 2, 1, 1, 1, 2, 2]));
