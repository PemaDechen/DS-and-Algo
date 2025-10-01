var intersection = function (nums1, nums2) {
  let obj = {};
  nums1.map((data) => {
    obj[data] = 1;
  });

  console.log(obj);

  nums2.map((data) => (obj[data] = obj[data] ? obj[data] + 1 : 1));
  let newArr = [];
  for (let key in obj) {
    if (obj[key] >= 2) {
      newArr.push(parseInt(key));
    }
  }
  return newArr;
};

// intersection([1, 2, 2, 1], [2, 2]);
console.log(intersection([8, 0, 3], [0, 0]));
