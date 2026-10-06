//  function isPalindrome(s) {
//         const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//          let left = 0;
//         let right = clean.length -1;

//         while(left < right){
//             if(clean[left] !== clean[right]){
//                 return false
//             }
//             left +=1;
//             right-=1;
//         }
//         return true;
//     }

// function isPalindrome(s) {
//   function isAlphabet(a) {
//     return (
//       (a >= "a" && a <= "z") || (a >= "0" && a <= "9") || (a >= "A" && a <= "Z")
//     );
//   }

//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (!isAlphabet(s[left])) {
//       left += 1;
//       continue;
//     }

//     if (!isAlphabet(s[right])) {
//       right -= 1;
//       continue;
//     }
//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }
//     left += 1;
//     right -= 1;
//   }
//   return true;
// }

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left += 1;
      continue;
    }

    if (!/[a-zA-Z0-9]/.test(s[right])) {
      right -= 1;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

console.log(isPalindrome((s = "Was it a car or a cat I saw?")));
