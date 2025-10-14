/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
/*
To get the max path, if we are starting at a node we can only split once.
i.e. 
    1
   / \
  2   3
     / \
    4   5

if we start at node 1 we can split  to node 2 and  node 3.
but to establish a max path we can't split again. If we split once the path becomes
2>1>3>5  or 2>1>3>4 but we can never have a path 2>1>3>4>3>5.

Note the max path may or may not include the root. Like in above example the max path
would be 4>3>5 = 11.

For this, check evry node and see what would be the max path if we never split using dfs.
we can use a global variable (say res) to save the max path we get. if a node gives a new max path then
we can update this variable else we keep it as it is.

we would want to know what would be the maxpath (without spliting)for lST and RST for each node.
so, when we process the root of the sub tree we have an idea what would be the max path sum on that node
if we are allowed to split.
it would be node + LSTpath+ RSTPath. if this value is greater than the
global value (res) we are going to update it.

this was we would be able to check if there is a path that may not need actual root node to give us 
maxPathSum.

But, a big idea is that after we have iterated a node we need to tell its parent what would be the max
path sum without spliting. 
so node 3 will need to return the max path without spliting to node 1 
it would be (5+3 =8).
we would need to return this value to node 1 so node 1 could compute  what is the max path sum 
it can have if it splits to LST/RST.
node +Max(LST,RST).

Suppose we have nodes with -ve values in that case we don't want to compute 
those so the max path for such scenarios would be 
node + Max(LST,RST,0);

BIG IDEA- We need to find two things what is the max path with out spliting and return that to parent
AND what is the maxPath with SPliting and update the global variable res.
*/
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let res= -Infinity;

        function getMax(root){ // return max LST or BST to parent no spliting
            if(!root) return 0;
            let left = getMax(root.left);
            let right = getMax(root.right);
            let path = root.val + Math.max(left, right);
            return Math.max(0, path) //return 0 if the maxPath is -ve
        }



        function dfs(root){ //return max path sum at a node while spliting
            if(!root) return;

            let left = getMax(root.left);
            let right = getMax(root.right);
            res = Math.max(res, left + right + root.val)
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return res;
    }


}
