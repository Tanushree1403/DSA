class TrieNode{
    constructor(){
        this.children={}; //stores key value. character and object of new node.
        this.isWord=false;
    }

    addWord(word){
        let curr = this;
        for(const c of word){

            if(!(c in curr.children)){
                curr.children[c]= new TrieNode(); // create a new key value pair c: new node
            }
            curr = curr.children[c]; 
        }
        curr.isWord = true;
    }

}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for(const word of words){
            root.addWord(word);
        }

        const ROWS = board.length;
        const COLS= board[0].length;

        const res = new Set();
        const visit = new Set();

        const dfs= (r,c,node, word) => {
            if(r<0 || c<0 || r>=ROWS || c>=COLS || visit.has(`${r},${c}`) ||
            !(board[r][c] in node.children)) {
                return false;
            }

            visit.add(`${r},${c}`);
            node = node.children[board[r][c]];
            word += board[r][c];

            if(node.isWord) res.add(word);

            dfs(r+1, c, node, word);
            dfs(r-1, c, node, word);
            dfs(r, c+1, node, word);
            dfs(r, c-1, node, word);

            visit.delete(`${r},${c}`);

        };

        for(let r=0; r < ROWS; r++){
            for(let c=0; c < COLS;c++){
                dfs(r,c,root,"");
            }
        }

        return Array.from(res);
    }
}
