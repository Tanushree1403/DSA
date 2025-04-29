class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        
        let countT={};
        let window={};
        for(let c of t){
            countT[c] = (countT[c] || 0)+1;
        }
        let have=0; let need=Object.keys(countT).length; 
        let res=[-1,-1];
        let reslength = Infinity; 
        let l=0;

        for(let r = 0; r < s.length; r++){
            let c = s[r];
            window[c]= (window[c] || 0)+ 1;

            if(countT[c] && countT[c]===window[c]){
                have++;
            }

            while (have === need) {
                if((r - l + 1) < reslength){
                    reslength= r -l + 1;
                    res=[l, r];
                }
                window[s[l]]--;
                if(countT[s[l]] && window[s[l]]< countT[s[l]] ){
                    have--;
                }
                l++;
            }
    }
        return reslength=== Infinity ?"": s.slice(res[0], res[1]+1);
    }
}
