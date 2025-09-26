const majorityElement = function (nums) {
  const value = nums.length / 2;
  console.log('This is value', value)
  let obj = {};

  nums.map((data) => (obj[data] = obj[data] ? obj[data] + 1 : 1));

  //   console.log(obj)

  for (let key in obj) {
    console.log("obj[key]", obj[key]);
    if (obj[key] > value) {
        console.log('This is key ', key)
      console.log(key);
    }
  }
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
