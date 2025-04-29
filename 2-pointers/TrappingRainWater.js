class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res=0;
        let lmax= height[0];
        let rmax= height[height.length-1];
        let l=0; let r= height.length-1;
        while(l<r){
            if(lmax<rmax){
                l++;
                lmax= Math.max(lmax, height[l]);
                res+= lmax-height[l];
            }
            else{
                r--;
                rmax= Math.max(rmax,height[r]);
                res+=rmax- height[r];
            }
        }
        return res;
    }
}
