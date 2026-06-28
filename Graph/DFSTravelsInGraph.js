// dfs means that you should visit the immediate neighbours of your neighbour first. 
//                   4
//           0      /      
//            \    2
//             \  /    
//               1    
//                \   
//                  3
// this means if we start from node ->1 the next node we must visit is 1->0->2
// then we will come to the neighbours of 2 before visiting 3. 1->0->2->4->3
// so after we visited all the neighbours of 2 we will backtrack to node 1 and we will visit the neighour of 1 again.
// in this case it will be 3.
class Solution {
    dfs (u, vis){

        console.log(u);

        for(let neigh of graph[u]){
        if(!vis.has(neigh)){
            vis.add(neigh)
            this.dfs(neigh, vis);
        }
    }


    }
}

        const graph = {
                0: [1],
                1: [0,2,3],
                3: [1],
                2: [1,4],
                4: [2]

};

    const solution = new Solution();
    const vis = new Set();
    vis.add(0);
    solution.dfs( 0, vis);
// time complexity: O(V+E)