//Inorder Iterative Traversal.
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

//In a Binary Search Tree, the left most node is smallest and the right most node is the larget.
// we process right node only when we process a node.
//Otherwise do not process the node just go left.
//To find Kth smallest node we process left BST first.

// recursively keep going leftmost node. keep pushing every
//left node to a stack when you see it. DOn't process it yet.
// when you reach the left most node i.e it doesn't have any more left or right child
// this leftmost will be top of the stack.
// pop the top of the stack  and decrement k.
//if k is not zero yet that means we haven't found the Kth smallest node
// so we go right! Remember we only go right when we processed the left.
//i.e we have poped the left node. then add the rihgt to stack and start processing the right node's left node
//i.e. node.right.left. Keep going unless K==0

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
       let stack =[];
       let curr = root;

       while(stack.length > 0 || curr !== null){
        while(curr !== null){
            stack.push(curr)
            curr= curr.left;
        }
        curr = stack.pop();
        k--;
        if(k === 0) return curr.val;

        curr = curr.right;
       }
    }


}
