// const findOdd = (arr) => {
//   const N = arr?.length;

//   for (let i = 0; i < N; i++) {
//     let data = arr[i];
//     let count = 1;
//     for (let j = 0; j < N; j++) {
//       if (data == arr[j] && i !== j) {
//         count += 1;
//       }
//     }
//     if (count !== 2) {
//       console.log("This is a single number ", arr[i]);
//       break;
//     }
//   }
// };

// findOdd([1, 1, 2, 2, 3, 3, 4, 5, 5]);

// const findOddNumber = (arr) => {
//   let obj = {};

//   arr.map((data) => (obj[data] = obj[data] ? obj[data] + 1 : 1));

//   let result = null;
//    arr.map((data) => {
//     if (obj[data] !== 3) result = data;
//   });

//   return result;
// };

// console.log(findOddNumber([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]));

// Learnt XOR

// sum of longest subarray

const A = [-1, 2, 3, -8, 3, -10, 6];

let largestSubArray = (arr) => {
  const N = arr.length;
  const prev = [];
  prev[0] = arr[0];
  let maxValue = -9999999999;

  for (let i = 1; i < N; i++) {
    const tempValue = Math.max(arr[i] + prev[i - 1], arr[i]);
    prev[i] = tempValue;
    maxValue = Math.max(maxValue, tempValue);
  }
//   console.log(prev);
  console.log(maxValue);
};

largestSubArray(A);
