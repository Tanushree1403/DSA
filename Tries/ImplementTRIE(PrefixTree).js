class TrieNode {
    constructor(){
        this.children = new Array(26).fill(null);
        this.word = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let c of word){
            let idx= c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[idx] === null)
                curr.children[idx] = new TrieNode();
            curr = curr.children[idx];
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(const c of word){
            let idx= c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[idx] === null) return false;
            curr= curr.children[idx];
        }
        return curr.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(const c of prefix){
            let idx= c.charCodeAt(0)-'a'.charCodeAt(0);
            if(curr.children[idx] === null) return false;
            curr= curr.children[idx];
        }
        return true;
    }
}
