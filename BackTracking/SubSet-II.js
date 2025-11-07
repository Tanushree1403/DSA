//recursive solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res=[];
        nums.sort((a,b)=> a-b);
        this.dfs(nums, 0,[], res);
        return res;
    }

    dfs(nums, i, subSet, res){
        if(i === nums.length){ // if all numbers are considered for the decision making.
            res.push([...subSet]);
            return;
        }
        //include the number
        subSet.push(nums[i]);
        //move on to next index
        this.dfs(nums, i+1, subSet, res);

        //exclude the number
        subSet.pop();
        // make sure the next number is not duplicate
        let nextIndex=i+1
        while(nextIndex < nums.length  && nums[nextIndex] === nums[i]) {
                nextIndex++;
        }

        this.dfs(nums, nextIndex, subSet, res)        
    }

}
