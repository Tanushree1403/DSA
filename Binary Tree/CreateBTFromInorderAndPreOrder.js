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

//               3
//              /  \
//             9    20
//                  / \
//                 15  7

// P=[3,9,20,15,7] and I=[9,3,15,20,7]
//the first value of Pre Ordred arr will always going to be the root.
//look for root in inorder arr. everything on the left of the root will make
//Left sub tree and everything on the right of node in inorder arr will make
//right sub tree. 
//3 is root. everything left of 3 in I is LST and will have just one node i.e 9
// everything right of root (3) in I is RST i.e 15,20,7. SO RST will have 3 nodes
// so partistion P as follow: LST=[9] and RST=[20,25,7] and R=[3]
//do this recusrrsively to further make the LST and RST again for sub tree =[15, 20,7]

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length) return null

        let root = new TreeNode(preorder[0]);

        let mid = inorder.indexOf(preorder[0]);

        root.left= this.buildTree(preorder.slice(1, mid+1),
        inorder.slice(0,mid));

        root.right = this.buildTree(preorder.slice(mid+1), 
        inorder.slice(mid+1));

        return root;
    }
}
