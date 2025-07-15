class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // find the cycle.
        let slow=0; let fast =0;
        while(true){
            slow= nums[slow];
            fast = nums[nums[fast]];
            if(slow===fast) break;
        }
        // find from where the cycle starts.
        let slow2 =0;
        while(true){
            slow = nums[slow];
            slow2 = nums[slow2];
            if(slow===slow2)
                return slow;
        }

    }
}
