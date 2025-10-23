class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap= new MinPriorityQueue((point) => point[0]); //You’re telling the queue: “Whenever I enqueue something called point, compute its priority as point[0].”
        //let res=[];
        for (const [x,y] of points){
            const dist = x**2 + y**2;
            minHeap.enqueue([dist,x,y]); //minheap will order the list based on the first value we put in it.
        }

        const res=[];

        for(let i=0; i <k; i++){
            const[_,x,y] = minHeap.dequeue();
            res.push([x,y]);
        }

        return res;
    }
}
