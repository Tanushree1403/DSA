// create two priority queue for each half of the data strea.
//A maxHeap for smaller numbers 
// A min heap for larger numbers.
//everytime we need to add a number we need to figure out which heap it should go to
// if the number is greater that the man heap (desc) front number,
// this will go to minHeap and Vice -e versa
// maxHeap -[3,2,1] front operation returns 3
//minHeap -[5,6,7] front operation returns 5
// clearly 4<3 this goes to max heap.
// need to make sure both the heaps have equal number of entries.
//at every entry we need to rebalance the two heaps.
class MedianFinder {
    constructor() {
        this.large = new PriorityQueue((a,b) => a - b); // min queue
        this.small = new PriorityQueue((a,b) => b - a) //max queue
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.large.isEmpty() || num > this.large.front()){
            this.large.enqueue(num);
        }
        else{
            this.small.enqueue(num);
        }

        //check if both queues have equal numbers
        if(this.small.size() > this.large.size() +1){
            this.large.enqueue(this.small.dequeue());
        }
        else if (this.large.size() >  this.small.size() +1){
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.small.size() > this.large.size()){
            return this.small.front();
        }
        else if (this.large.size() > this.small.size()){
            return this. large.front();
        }
        else{
            return (this.small.front() + this.large.front()) /2.0 ;
        }
    }
}
