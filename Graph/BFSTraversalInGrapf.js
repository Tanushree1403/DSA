// bfs means that you should visit the immediate neighbours first. 
//                   4
//           0      /      
//            \    2
//             \  /    
//               1    
//                \   
//                  3
// this means if we start from node ->1 the next node we must visit is 0->2->3
// then we will come to the neighbours of the neighbours of 1
// so after we visited all the neighbours next we will visit neighbours of 0,2 and then 3.
class Solution {
    bfs (graph, start){
        const visited = new Set();
        const queue = [];

        visited.add(start);
        queue.push(start);
        console.log("BFS Traversal: ");

        while(queue.length>0){
            let u= queue.shift();
            console.log(u);
            for(const v of graph[u] ){
                if(!visited.has(v)){
                    visited.add(v);
                    queue.push(v);
                    //console.log(v);
                }
            }
        }
    }
}

        const graph = {
                0: [1],
                1: [0,2,3],
                3: [1],
                2: [1,4],
                4: [2],

};

    const solution = new Solution();
    solution.bfs(graph, 0);
