class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const output = new Array(n - k + 1);
        const q = new Deque();
        let l = 0, r = 0;
        while(r<n){
            // if dequeue has any numbers abd the current number is less than the number at the back
            // remove tha last number from queue coz its not the max number in current window.
            while (q.size() && nums[q.back()] < nums[r]){
                q.popBack();
            }
            // push the index of the current max into the queue
            q.pushBack(r);

            // if the left pointer is not in the current window pop it from the queue.
            if(l>q.front()) {
                q.popFront();
            }

            // if we have iterated the current window then pull the front of the queue and 
            // put it in the output array. The front of the queue will always have the max 
            // for current window.
            if((r+1)>=k){
                output[l]= nums[q.front()];
                l++;
            }
            r++;
        }

        return output;
    }

}
