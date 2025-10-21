//Do the most frequent task first. Wait for idle cycle and do the 
//most frequent task after that. if the sequence is [A A A B B C C]
//A->3 B->2 C->2 so A is most frequent. start with A then wait n=2 cycle.
//You would also need a queue to keep a note of the task you just completed 
//and when you can redo this task.
// so now A->2 B->2 C->2 since we just did A we can't do that agian. 
//In the queue we will add the task A and its frequence 2 and it will be available at 1+n = 3 
//so queue look like |2,3|  |   | (note we actually don't need to save the task A in queue.).
// Then pick either B or C. Let's say we pick B 
//A->2 B->1 C->2. Now most frequent would be c since n=2 we still can't pick A
//queue will be |2,3|1,4|  | 
//A->2 B->1 C->1 . queue --> |2,3|1,4| 1,5| Now we can pick A again because we are at n=3.
//we will pop the first element from the queue (since the first element is A) and use it.
//A->1 B>1 C>1 . and Queue: |1,4|1,5| To figure out the most frequent task 
// use MaxHeap (logn)
// MaxHeap :[3,2,2] [AAA,BB,CC]Queue: []
//n=0 [BB,CC] queue:[[AA,3]] ->A
//n=1 [CC] queue:[[AA,3] [B,4]] -B
//n=2 [] queue: [[AA,3] [B,4] [B,5]] ->c
//  n==3 pop from queue add to max heap.
//n=3 [AA] queue: [[B,4][C,5]] ->A
//also at n==3 pop from heap and add to queue
//n==3 [] queue: [[B,4][c,5][A,6]]
//n=4 [B] queue: [[C,5][A6]]->b pop from queue add to heap since all 
//task b is complete no need to add to queue.
//n==4 [] queue: [[C,5][A6]]
//n=5 [C] queue: [[A,6]] ->c
//N==5 [] queue: [A,6]
//pop from max heap:
//n=6 [] queue: [[]] -A
//[AbcAbcA]

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {

        //find all tasks and there frequency
        let count = new Array(26).fill(0);
        for(let task of tasks){
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        // put all frequency in max heap

        let maxHeap = new MaxPriorityQueue();
        for(let i=0; i<26; i++){
            if(count[i]>0) maxHeap.push(count[i]);
        }

        let time = 0; let q= new Queue();

        while(maxHeap.size() > 0 || q.size() > 0){
            time++;

            if(maxHeap.size() > 0) {
                //start popping from maxHeap
                let cnt = maxHeap.pop()-1;
                // if freq is not zero reduce the current
                //frequency by 1 and push to queue. Also add next expected cycle.
                if(cnt!=0) q.push([cnt,time +n])
            }

            //pop from queue if the time cycle matches with the one in the queue.
            if(q.size() > 0 && q.front()[1]=== time)
                maxHeap.push(q.pop()[0]);
        }

        return time;
    }
}
