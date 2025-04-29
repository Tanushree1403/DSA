class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charset= new Set(s); let res=0;
        for(let c of charset){
            let l=0; let count=0;
            for(let r=0; r<s.length;r++){
                if(s[r]===c) count++
                while((r-l+1)-count>k){
                    if(s[l]===c) count--;
                    l++
                }
                res= Math.max(res,r-l+1);
            }
        }
        return res;
    }
}
