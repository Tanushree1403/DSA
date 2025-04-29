class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countS= {};
        const countT={};
        if(s.length != t.length)
            return false;
        for(let i=0; i<s.length;i++){
            countS[s[i]]= (countS[s[i]] || 0)+1
            countT[t[i]]= (countT[t[i]] ||0)+1
        }

        for(const key in countS){
            if(countS[key]!=countT[key])
                return false
        }

        return true;
    }
}
