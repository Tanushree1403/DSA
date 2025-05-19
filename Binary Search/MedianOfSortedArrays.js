class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        if(A.length > B.length){
            [A,B] = [B,A];
        }
        let total = (A.length + B.length)

        let l = 0; let r = A.length;
        let half =  Math.floor((total +1 )/2);
        while(l <= r)
        {
            const i = Math.floor((l+r)/2);
            const j = half - i; 

            const Aleft = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;
            const Aright = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
            const Bleft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
            const Bright = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

           if (Aleft <= Bright && Bleft <= Aright) {
                // my left window is correct
                if(total % 2!==0){ // length is odd
                    return Math.max(Aleft,Bleft);
                }
                //length is even
                    return (Math.max(Aleft,Bleft)+ Math.min(Aright,Bright)) /2;
                
            }
            else{
                //if window is not correct //?
                if(Aleft > Bright){
                     r= i - 1;
                }
                else{
                     l = i + 1;
                }
            }
        }

        return -1;
    }
}
