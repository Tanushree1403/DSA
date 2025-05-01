class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //[30,38,30,36,35,40,28]
    dailyTemperatures(temperatures) {
        const res= new Array(temperatures.length).fill(0);
        const stack=[]; //have temp and index

        for(let i=0; i < temperatures.length; i++){
            const t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length-1][0]){
                const [stackT,stackInd]= stack.pop();
                res[stackInd]= i - stackInd;
            }
            stack.push([t,i]);
        }
        return res;
    }
}
//[30,2]

//[38,1]
