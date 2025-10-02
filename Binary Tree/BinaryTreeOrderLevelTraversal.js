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
     * @return {number[][]}
     */
    levelOrder(root) {
        //edge case
        let res=[];
        if(!root) return res;

        const q= new Queue();
        q.push(root);

        while (!q.isEmpty()) { //need the while loop so we iterate all levels
            let level=[];
            for (let i = q.size(); i > 0; i--) {
                let node = q.pop();
                if (node !== null) {
                    level.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if(level.length > 0) res.push(level);
        }

        return res;
    }
}

//Inner for (let i = q.size(); i > 0; i--)
//Take a snapshot of how many nodes are in the current level 
//(levelSize = q.size()), and process exactly that many. 
//As you dequeue those nodes, you enqueue their children (next level) — 
//but those new nodes won’t be processed until the next while iteration.
