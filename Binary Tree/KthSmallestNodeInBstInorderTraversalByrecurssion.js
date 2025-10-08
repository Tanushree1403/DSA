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
//Inorder Traversal by recursive call. Recursively keep going leftmost.
//then add left most to the arr. then return null as left most node will have null node.left.left
//this will bring control to parent node i.e. the node just above the leftmost node.
// Now add the val of this node as this is now the leftmost node which is still unprocessed.
//Only and only then you can go right and add the val to array.

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const arr=[];
        this.dfs(root,arr);
        return arr[k - 1];
    }

    dfs(node, arr){

        if(!node) return;

        this.dfs(node.left, arr);
        arr.push(node.val);
        this.dfs(node.right,arr);
    }
}

//TC: O(n) : need to process each node
//SC: O(n) : need to add each node to array