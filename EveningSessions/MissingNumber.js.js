const missingNumber = function (nums) {
  const obj={};
  const N = nums?.length;
  for (let i = 0; i <= N; i++) {
    obj[i]=i;
  }
  
  for(let key in obj){
    if(!nums.includes(obj[key])){
        console.log(obj[key]);
    }
  }

};


missingNumber([9,6,4,2,3,5,7,0,1])