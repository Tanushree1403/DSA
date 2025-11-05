/*this decision tree will be a bit different. Instead of deciding 
to add or remove the number, we will start with an empty array.
we will keep adding one number on the array and see how many permutations
we can create.
               [1,2,3]--> [[1,2,3] [2,1,3] [2,3,1] [1,3,2] [3,1,2] [3,2,1]]
                  |
                [2,3]--> [[2,3] [3,2]]
                  |
                 [3] --> [[3]]
                  |
                 [[]] --> [[]]
 we start from the bottom an empty array can give only one combination -->[]
 we go a step up [3]  can give one combination [3]
 we go another step up [2,3] can give two combinations [2,3] and [3,2]
 we go another step up and then we use the combination from prev steps 
 to add 1 in that combination.
 so using combination [2,3] --> [1,2,3] [2,1,3] [2,3,1]
using [3,2] --> [1,3,2] [3,1,2] [3,2,1]

You want all possible orderings of nums.
Backtracking = build a permutation one slot at a time, try every choice, 
and undo it before trying the next. */
/* res will hold all permutations.
You call backtrack with:
perm = [] → current building permutation
nums → original array
pick = [false, false, ...] → to mark which indices are already used

For every index i, if we haven’t used nums[i] yet (!pick[i]):

pick it → put it in perm

mark it as used

recurse to fill the next position

when you come back, remove it (perm.pop()) and mark unused again → so the next iterations can use it

That “choose → explore → un-choose” is the heart of backtracking.
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        let res=[];
        backtrack([],nums,new Array(nums.length).fill(false));
        return res;

        function backtrack(perm,nums,pick){
            if(perm.length === nums.length){ //When perm is as long as nums, you’ve picked a full permutation — save it.
                res.push([...perm])
                return;
            }

            for(let i=0; i<nums.length; i++){
                if(!pick[i]){
                    perm.push(nums[i]);
                    pick[i] =true;
                    backtrack(perm,nums,pick)
                    perm.pop(); //empty the perm so i=1 can be added.
                    pick[i] = false;
                }
            }
        }
    }
}
