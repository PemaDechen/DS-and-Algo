const checkTwoSumEqualsZero = (nums)=>{
    const obj ={};
    for(let i = 0;i<nums.length; i++){
        if(obj[-nums[i]]){
            return true;
        }
        
        obj[nums[i]] = true;
    }

    return false;
}


console.log(checkTwoSumEqualsZero(nums = [-3, 1, 3, 2]) )