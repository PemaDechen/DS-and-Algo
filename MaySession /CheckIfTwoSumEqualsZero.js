const checkTwoSumEqualsZero = (nums)=>{
    const obj ={};
    for(let i = 0;i<nums.length; i++){
        if(obj[-nums[i]]){
            return true;
        }
        
        obj[nums[i]] = true;
    }
    console.log('This is obj, obj', obj)
    console.log('this is -obj[nums[i]]', -obj[nums[0]])

    return false;
}


console.log(checkTwoSumEqualsZero(nums = [-3, 1, 3, 2]) )