class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    constructor(){
        this.res=[]; // adding this here because I am not passing this via combinationSum2 method
    }

    combinationSum2(candidates, target) {
        // sort the input array so all duplicate numbers are grouped together
        this.res=[];
        candidates.sort((a,b) =>a-b);
        this.dfs(candidates, target,0,[],0);
        return this.res;
    }

    dfs(candidates, target, i, curr, total){
        if(total === target){ //valid case
            this.res.push([...curr]);
            return;
        }

        if(total > target || i === candidates.length){
            return; //if sum is greater than total stop moving forward with that leaf
        }

        //include the number.
        curr.push(candidates[i]);
        this.dfs(candidates, target, i+1, curr, total + candidates[i]);
        // don't include the number.
        curr.pop();

        //this will make sure we do not reconsider same number if its repeated in the input array
        while(i+1 < candidates.length && candidates[i] === candidates[i+1])
            i++;
        this.dfs(candidates, target, i+1, curr, total);
    }
}
