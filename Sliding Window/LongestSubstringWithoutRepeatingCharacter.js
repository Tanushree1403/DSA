class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mySet= new Set();
        let maxl=0; let l=0; 
        for(let r=0; r<s.length;r++){
            while(mySet.has(s[r])){
                mySet.delete(s[l]);
                l++;
            }
            mySet.add(s[r]);
            maxl= Math.max(maxl,mySet.size)
        }
        return maxl;
    }
}
