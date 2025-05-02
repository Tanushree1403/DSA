class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS= matrix.length;
        const COLS= matrix[0].length;

        let top = 0; let bot = ROWS-1;
        while(top <= bot){
            const midRow= Math.floor((top + bot)/2);
            if(target < matrix[midRow][0]) {
                bot = midRow - 1;
            }
            else if (target > matrix[midRow][COLS-1]){
                top = midRow + 1;
            }
            else break;
        }

        //handles the case where there is only one row and column like [[1]] target = 0
        if (!(top <= bot)) {
            return false;
        }
        // since we break at else we have to re-calculate the row index
        const row = Math.floor((top + bot)/2);
        let l=0; let r= COLS - 1;
        while(l <= r){
            const m = Math.floor((l+r)/2);

            if(target > matrix[row][m]){
                l = m + 1;
            }
            else if (target < matrix[row][m]){
                r = m - 1; 
            }

            else return true;
        }

        return false;

    }
}

// Time complexity : logn + log m = log(n*m)