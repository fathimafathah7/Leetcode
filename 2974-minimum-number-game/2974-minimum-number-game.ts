function numberGame(nums: number[]): number[] {
    let arr:number[]=[];
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+=2){
        arr.push(nums[i+1]);
        arr.push(nums[i])
    }
    return arr
};