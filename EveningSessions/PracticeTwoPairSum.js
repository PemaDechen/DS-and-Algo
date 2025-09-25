const PracticeTwoPairSum = (arr, T) => {
  const N = arr.length;
  const map = new Map();
  let newArray = [];
  for (let i = 0; i < N; i++) {
    const currentValue = arr[i];
    const compliment = T - currentValue;
    if (map.has(compliment)) {
      // If we get the compliment of the current value, Sending the index of both currentValue and the index of the compliment value.
      newArray.push([map.get(compliment), i]);
    } else {
      map.set(currentValue, i);
    }
  }

  return newArray;
};

console.log(PracticeTwoPairSum([2, 3, 4, 5, 67, 7], 9));
