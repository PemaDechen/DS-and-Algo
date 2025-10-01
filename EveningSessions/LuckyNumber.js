const LuckyNumber = (arr) => {
  let obj = {};

  arr.map((data) => (obj[data] = obj[data] ? obj[data] + 1 : 1));

  let maxLuckyNumber = -1;
  for (let key in obj) {
    if (parseInt(key) == obj[key]) {
      if (maxLuckyNumber < obj[key]) {
        maxLuckyNumber = obj[key];
      }
    }
  }

  console.log(maxLuckyNumber);
};

// LuckyNumber([2, 2, 3, 4]);
// LuckyNumber([2,2,2,3,3]);
LuckyNumber([1,2,2,3,3,3]);
