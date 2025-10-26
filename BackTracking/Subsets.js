//BackTracking
//In solution, we will use a decision tree. every element in the nums array
//we can decide if we want to put it in a sub set or not.
//for starting [1,2,3] at nums[0] =1, We can decide that the subset can or 
//can not have a 1 so subsets would be []  if not 1 and [1] if we decided to add 1.
// we can create below decision tree:
//                     1
//             /             \
//            []              [1]
//         /     \         /       \
//        []    [2]       [1]       [1,2]
//      /  \    /  \      /  \      /     \
//    []   [3] [2] [2,3] [1] [1,3] [1,2]  [1,2,3]
// the end leaf node has all the unique leafs
// ps: 1,2 and 2,1 are considered duplicate.
// this looks like a Binary tree and we can apply a dfs
// where one side say left will include the number and right side will exclude

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res=[];
        const subset =[];
        this.dfs(nums,subset,res,0);
        return res;
    }

    dfs(nums,subset,res,i){
        if(i>= nums.length){ // we iterated the whole decision tree
            res.push([...subset]); 
            return;
        }

        subset.push(nums[i]); //include the num
        this.dfs(nums,subset,res,i+1);
        subset.pop(); // exclude the num
        this.dfs(nums,subset,res,i+1)
    }
}
