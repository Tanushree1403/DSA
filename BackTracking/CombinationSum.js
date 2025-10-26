class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res =[];
        let cur=[];
        this.backtrack(nums, target, res,cur,0)
        return res;
    }

    backtrack(nums, target, res, cur, i){
        if(target === 0){
            res.push([...cur]);
        } else if ( target < 0 || i >= nums.length){
            return;
        } else {
            cur.push(nums[i]);
            this.backtrack(nums, target - nums[i],res, cur,i);
            cur.pop();
            this.backtrack(nums, target,res, cur,i+1);
            
        }
    }
}
