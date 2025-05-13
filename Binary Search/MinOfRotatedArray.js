class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0; let r = nums.length - 1;
        while(l < r){
           let m = l + Math.floor((r - l) / 2);
            if(nums[m] < nums[r]){
                r = m ; //go left
            }
            else
                l = m + 1 ; //go right
        }

        return nums[l];
    }
}

//Use:
//nums[m] < nums[r] ➝ Right half is sorted, go left.
//nums[m] > nums[r] ➝ Pivot is in the right half.
//Comparing with nums[l] is risky unless you're doing a different variant with more checks.