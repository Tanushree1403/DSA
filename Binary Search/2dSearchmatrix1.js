class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let arr of matrix){
             if(target <= arr[arr.length-1]){
                let l= 0; let r= arr.length-1;
                while(l <= r){
                    const m= l+ Math.floor((r-l)/2);
                    if(arr[m] > target){
                        r= m-1;
                    }
                    else if (arr[m] < target){
                        l= m+1;
                    }
                    else return true;
                }
             }
        }

        return false;
    }
}


//Time Complexity:  mlog(n) m- nuomber of rows in matrix; n- number of items in one row.