function GreatestElement(nums) {
  let count = 0;
  let curNum = -Infinity;
  for (n of nums) {
    if (count === 0) {
      curNum = n;
    }
    if (curNum === n) {
      count++;
    } else {
      count--;
    }
  }
  return curNum;
}

console.log(GreatestElement([1, 2, 3 ]));
