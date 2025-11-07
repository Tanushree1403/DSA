//Iterative solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res=[];
        nums.sort((a,b)=> a-b);
        this.backtrack(nums, 0,[], res);
        return res;
    }

    //Iterative Solution
    backtrack(nums, start, subSet, res){
        res.push([...subSet]);

        for( let i=start; i<nums.length; i++){
            if( i>start && nums[i] === nums[i-1]){
                continue;
            }
            subSet.push(nums[i]); // include the num
            this.backtrack(nums, i+1, subSet, res);// move to next index number explore
            subSet.pop(); // remove the num
        }
    }
}
