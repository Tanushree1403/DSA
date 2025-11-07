// look for first character in the matrix. start with location 0,0
// if word matches, go and check its adjascent locations for next word.
//otherwise if word is not matched return false and look at location 0,1.
// go through entire board until you find first letter.
//else return false;
// when you look for the second match you would have to start again from 0,0.
// so keep a set which has current location of the 
/*
Try every cell as a starting point.

From a cell, do DFS to see if the word can be formed.

DFS:

stop if out of bounds / mismatch / reused

if we matched all chars → true

otherwise, go 4 directions

If any DFS returns true → whole function returns true.
 */
class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS= board.length;
        const COLS= board[0].length;
        const path = new Set();

        const dfs=(r,c,i) =>{
            if(i===word.length){
                return true;
            }

            if(r<0 || c<0 || r>=ROWS || c>=COLS
            || board[r][c] !==word[i] || path.has(`${r},${c}`))
                return false;
            
            //we have found the word catch its location.
            path.add(`${r},${c}`)
            //check all adjascent locations
            const res= 
                dfs(r+1,c,i+1) ||
                dfs(r-1,c,i+1) ||
                dfs(r, c+1, i+1) ||
                dfs(r, c-1, i+1);

                path.delete(`${r},${c}`) // clean up the r c location after we checked all directions

                return res;
        };

        for(let r=0; r<ROWS; r++){
            for(let c=0; c<COLS; c++){
                if(dfs(r,c,0)) return true;
            }
        }

        return false;
    }
}
