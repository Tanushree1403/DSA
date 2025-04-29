class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mymap= new Map()
        for(let i=0; i<nums.length; i++){
            if(mymap.has(nums[i])){
                return true;
            }
            else
            mymap.set(nums[i],i)
        }

        return false;
    }
}
