class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n=nums.length;
        const res= new Array(n);
        const preArry= new Array(n);
        const postArry= new Array(n);

        preArry[0]=1; 
        postArry[n-1]=1;
        
        for(let i=1; i<n;i++){
            preArry[i]= preArry[i-1]*nums[i-1];
        }

        for(let i=n-2;i>=0;i--){
            postArry[i]= postArry[i+1]*nums[i+1];
        }
        for (let i = 0; i < n; i++) {
            res[i]=  postArry[i]*preArry[i];
        }  
        return res; 
    }

}
