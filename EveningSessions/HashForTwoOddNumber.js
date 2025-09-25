/*
You are given an array of integers, A. Every number in the array appears exactly twice, except for two numbers, which appear only once.
*/

const HashForOddTwo = (arr) => {
  const N = arr.length;
  const obj = {};
  for (let i = 0; i < N; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }

  let newArr=[];
  for(key in obj){
    if(obj[key]!==2){
        newArr.push(key);
    }
  }
  console.log(newArr)
};

// HashForOddTwo([1,2,4,3,2,1])
HashForOddTwo([10,5,8,10,9,8])