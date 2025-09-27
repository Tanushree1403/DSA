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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        if(root=== null) return true;
        let stack =[root];
        let mp = new Map();
        mp.set(null,0);

        while(stack.length >0){
            console.log(stack.length);
            let node = stack[stack.length -1];
            if(node.left && !mp.has(node.left))
                stack.push(node.left);
            else if (node.right && !mp.has(node.right))
                stack.push(node.right);
            else{

                node = stack.pop();
                let Lheight =  mp.get(node.left);
                let Rheight= mp.get(node.right)

                if(Math.abs(Rheight-Lheight)>1) return false;
                
                mp.set(node, 1+Math.max(Lheight, Rheight));
            }
        }

        return true;
    }
}
