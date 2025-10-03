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
     * @return {number[]}
     */
    rightSideView(root) {
        //if(root === null) return [];
        const q= new Queue();
        const res=[];

        q.push(root);

 while (!q.isEmpty()) {
            let rightSide = null;
            const qLen = q.size();

            for (let i = 0; i < qLen; i++) {
                const node = q.pop();
                //const node = q.pop();
                if (node) {
                    rightSide = node;  // keep overwriting; the last non-null we process = rightmost
                    q.push(node.left);
                    q.push(node.right);
                }
            }

            if(rightSide) res.push(rightSide.val);
        }

        return res;
    }
}
