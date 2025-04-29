class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]} [3,4,5,6,7]
     */
    twoSum(nums, target) {
        const prevMap= new Map();
        for(let i=0; i<nums.length;i++){
            const diff= target-nums[i];
            if(prevMap.has(diff)){
                return [prevMap.get(diff),i]
            }
            else{
                prevMap.set(nums[i],i);
            }
        }
    }
}
