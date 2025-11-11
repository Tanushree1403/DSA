/* To place a queen these are the rules  not in the same column

not on the same positive diagonal (r + c)

not on the same negative diagonal (r - c)

Positive diagonal - 
These are the diagonals that go top-left → bottom-right (↘).

If you take any cell and add its row + column, everything on that ↘ diagonal will have the same sum.

(0,2), (1,1), (2,0) → they all have r+c = 2, so they’re on the same positive diagonal.

Negative Diagonal -
These are the diagonals that go bottom-left → top-right (↗).

If you take any cell and do row − col, everything on that ↗ diagonal will have the same difference.

Take cells:

(2,0) → 2 - 0 = 2

(3,1) → 3 - 1 = 2

(4,2) → 4 - 2 = 2

use the posDia and negDia set to check if we can place a queen at that location.

*/
class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res=[];
        const cols = new Set();
        const posDia= new Set();
        const negDia = new Set();
        const board =  Array.from({length : n},()=> Array(n).fill('.'))

        const backtrack=(r) =>{
            if(r === n){
                res.push(board.map((row)=> row.join(''))); //Convert the 2D board to the required array-of-strings format and save it.
                return;
            }

            for(let c=0; c<n; c++){
                if(cols.has(c) || posDia.has(r+c) || negDia.has(r-c)){
                    continue;
                }

                cols.add(c);
                posDia.add(r+c); //push to set which means can't keep queen at this diagonal
                negDia.add(r-c);// push to set which means can't keep queen at this diagonal
                board[r][c] ='Q';

                backtrack(r+1);

                cols.delete(c)
                posDia.delete(r+c);
                negDia.delete(r-c);
                board[r][c]='.';
            }

        }

        backtrack(0);
        return res;
    }
}
