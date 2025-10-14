class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        const maxHeap = new MaxPriorityQueue();

        for(const stone of stones){
            maxHeap.enqueue(stone);
        }

        while(maxHeap.size() > 1){
            let firstStone = maxHeap.dequeue();
            let secondStone = maxHeap.dequeue();

            if(firstStone != secondStone)
                maxHeap.enqueue( firstStone - secondStone );
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
