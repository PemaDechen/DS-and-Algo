const missingNumber = (nums)=>{
    let total = 0;

    for(let i=0;i< nums.length; i++){
        total +=i;
        total-=nums[i]; 
        console.log('This is total', total)
    }

    total+= nums.length;
    console.log('nums.length', nums.length)

    return total;

}

console.log(missingNumber([0,1,2,4,5]));