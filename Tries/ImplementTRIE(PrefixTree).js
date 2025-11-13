class TrieNode{
    constructor(){
        this.children =  Array(26).fill(null);
        this.word = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    getIndex(c){
        return c.charCodeAt(0) -'a'.charCodeAt(0);
    }
    /**
     * @param {string} word
     * @return {void}
     */
    /*
    Start at root.

    For each character:

        compute its child index.

        create the child node if it doesn’t exist.

        move curr down to that child.

    After the last char, set word = true at the final node.
     */
    addWord(word) {
        let curr = this.root;

        for(const c of word){
            let idx = this.getIndex(c);
            if(curr.children[idx] === null){
                curr.children[idx]= new TrieNode();
            }
            
            curr = curr.children[idx];           

        }

        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word,0,this.root);
    }

    /*
    Iterate from index j to end of word:

    If the current pattern char is .:

    This can match any single letter. So you try every non-null child and recursively continue from i+1. If any recursive call returns true, the whole search succeeds.

    Otherwise (a concrete letter):

    Follow the only allowed edge. If it doesn’t exist → false.

    If you finish the loop (matched all characters), return whether the current node is the end of a word (curr.word). 
    */
    dfs(word,j,root){
        let curr = root;

        for(let i = j; i< word.length; i++){
            const c = word[i];
            if(c === '.') {
                for(const child of curr.children){
                    if(child !== null && this.dfs(word, i+1,child))
                        return true;
                }

                return false;
            }

            else
            {
                let idx = this.getIndex(c);

                if(curr.children[idx] === null) return false;
                //if(curr.children[idx].eow === false) return false;

                curr = curr.children[idx];
            }
        }

        return curr.word;
    }
}
