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
//for serialisation use a inorder DFS or BFS approach, put each node val in a comma seperated 
//string and for null use 'N' to denote there is no node.
//for de-searilization, read the string the first value will always be root and second
//value will always be left child of node. If you see N, N that means there are no further
//child so you pop back to parent and go for Right sub tree.
class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res =[];

        function dfs(root){
            if(root===null) {
                res.push("N");
                return;
            }
            res.push(root.val.toString());
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root)

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(",");
        const i ={val:0};
       return this.dfsDeserialize(vals,i);
    }

    dfsDeserialize(vals,i){
        if(vals[i.val] === "N"){
            i.val++;
            return null;
        }

        const node = new TreeNode(parseInt(vals[i.val]));
        i.val++;
        node.left = this.dfsDeserialize(vals,i);
        node.right = this.dfsDeserialize(vals,i);

        return node;
    }
}
