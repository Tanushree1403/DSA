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

/* NOTE---->
Because in JavaScript numbers are passed by value.
dfs(root, res) needs to update a single shared “best diameter so far” from deep inside recursion. If res were just a number, doing res = Math.max(...) inside dfs would only change the local copy.

By making res an object reference (here, a one-element array res = [0]), all recursive calls see the same reference, so updating res[0] mutates the same container—effectively simulating “pass-by-reference”.
*/

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let stack =[root];
        let mp= new Map();
        mp.set(null,[0,0]);

        while(stack.length >0){
            let node = stack[stack.length-1];

            if(node.left && !mp.has(node.left))
                stack.push(node.left);
            else if (node.right && !mp.has(node.right))
                    stack.push(node.right);
            else{

                node = stack.pop();
                let [leftheight, leftDiameter]= mp.get(node.left);
                let [rightheight, rightDiameter]= mp.get(node.right);

                let height = 1+ Math.max(leftheight , rightheight);
                let diameter = Math.max(leftheight + rightheight, Math.max(leftDiameter,rightDiameter));

                mp.set(node,[height,diameter]);
            }
        
        }

        return mp.get(root)[1]; // in the map we are always saving the max diameter so root 
        // will always have max diameter.
    }


}
