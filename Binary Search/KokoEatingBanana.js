class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1;
        let r= Math.max(...piles);
        let res =r;
        while (l <= r){
            const m = Math.floor((l + r)/2);
            let totalTime = 0;
            for(const p of piles){
                totalTime += Math.ceil(p / m);
            }

            if(totalTime <= h){
                res = m;
                r = m-1; 
            } else {
                l = m+1;
            }
        }

        return res;
    }
}

// we don't need this pile array to be sorted because we can 
//get max of the piles using Math.max(...piles) 
//the l and r do not point to elements in the array
//l and r are just speed that we increase based on m 
//we incerease l and r by 1 to find appropriate m.
// and first time m is calsulated based on max pile and min pile heap 1