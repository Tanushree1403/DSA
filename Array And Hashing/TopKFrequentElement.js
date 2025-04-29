class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res=[];
        const count = {};
        const freq= Array.from({length:nums.length +1},()=>[]);
        //find out how many times one number is repeated and put it in the hash
        for (const num of nums) {
            count[num]=(count[num] ||0)+1;
        }
        //create another set where freq is key and value is an array of numbers that have the freq.
        //like Key->3 value-> [2,3] this means that number 2 and 3 are repeated 3 times.
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }
        // to get top freq iterate the freq array from the last.
        for(let i=freq.length-1; i>0; i--){
            for(const n of freq[i]){

                res.push(n)
                if(res.length===k)
                    return res;
            }
        }
        return res;
    }
}
