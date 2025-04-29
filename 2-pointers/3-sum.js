class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res=[];
       nums.sort((a,b)=>a-b);

       for(let i=0; i<nums.length;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        if(nums[i]>0) break;
        let l= i+1; let r= nums.length-1;
        while(l<r){
            const sum = nums[i] + nums[l] + nums[r];
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            }
             if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } 
            if(sum===0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
                }
        }
       }
    return res;

    }
}
