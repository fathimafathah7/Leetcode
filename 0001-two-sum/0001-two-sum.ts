function twoSum(nums: number[], target: number): number[] {
     let map = new Map<number,number>()

    for(let i=0;i<nums.length;i++)
    {
        let needed=target-nums[i]
        if(map.has(needed))
        {
            return [ map.get(needed),i]
        }
            map.set(nums[i],i)


    } 
        return[] 
}
