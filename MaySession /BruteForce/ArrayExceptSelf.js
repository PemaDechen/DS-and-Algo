const exceptSelf = (arr) => {
  // Ofcourse need to use prefix sum but right now I don't know so I will use hashmap
  const obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newData = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        newData = newData * arr[j];
      }
    }
    result.push(newData);
  }
  console.log('This is result ', result);
};

exceptSelf((nums = [1, 2, 4, 6]));
