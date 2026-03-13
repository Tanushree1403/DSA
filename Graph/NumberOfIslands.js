//Loop through every cell

//When you find a '1', that means you found a new island

//Run BFS from that cell to visit all connected land cells

//Mark them as '0' so they are not counted again

//Increase islands count by 1

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const direction=[[1,0],[-1,0],[0,1],[0,-1]]; 

        const ROWS = grid.length;
        const COLS= grid[0].length;

        let island=0;
        const bfs= (r,c) =>{
            const q= new Queue();
            q.push([r,c]);
            grid[r][c]='0';
            while(!q.isEmpty()){
                const[row,col]=q.pop();
                for(const[dr,dc] of direction){
                    const nr = row+dr;
                    const nc = col+dc;

                    if(nr>=0 && nc>=0 && nr< ROWS && nc< COLS && grid[nr][nc]==='1'){
                        q.push([nr,nc]);
                        grid[nr][nc] ='0';
                    }
                }
            }
        };

        for(let r=0; r<ROWS;r++){
            for(let c=0; c<COLS; c++){
                if(grid[r][c]==='1'){ // start bfs as soon as you find land.
                    bfs(r,c);
                    island++;
                }
            }
        }

        return island;
    }
}
