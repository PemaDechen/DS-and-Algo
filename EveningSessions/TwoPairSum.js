/* 
 TODO: Find two distinct indices i and j in the array A such that the numbers at those positions sum up to the target T:
 TODO: A=[7,11,15,2]
 TODO: T=9
 TODO: Answer: Indices [0,1] (because A[0]+A[1]=2+7=9).
 */
// ! Clarity comes from solving, not from overthinking
const TwoPair = (arr, T) => {
  const numMap = new Map();
  // One-Pass Strategy (O(N) time)
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = T - currentNum;
    console.log('This is numMap ', numMap);
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNum, i);

    // Here key is number and value is the index.
  }
//   console.log(numMap)
  return [];
};

console.log(TwoPair([7, 11, 15, 2], 9));
