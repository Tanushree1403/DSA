//Why use a minHeap for this question?
//Min heap has two properties we can add or pop an element with log(N) complexity
//And the best part is we can find the minimum element in just O(1).
// when we want the Kth larget number that means we want to create a minHeap 
//of length k.
//everytime we add a number to this minheap we will compare the number with the 
//value in minheap. only if its greater than the min element of min heap
//we will add this number and remove the min number from the heap.

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.klargest =k;
        this.minHeap= new MinPriorityQueue();

        for(const num of nums){
            this.minHeap.enqueue(num);
        }

        while(this.minHeap.size() > k){
            this.minHeap.dequeue() // will remove the min number
        }


    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {

        this.minHeap.enqueue(val);
        if(this.minHeap.size() > this.klargest){
            this.minHeap.dequeue();
        }

        return this.minHeap.front();

    }
}
