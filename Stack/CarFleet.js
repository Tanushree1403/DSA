class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack=[];
        let pair= position.map((p,i)=>[p,speed[i]]);
        pair.sort((a,b) => b[0] - a[0]);

        for(let [p,s] of pair){
            stack.push((target-p)/s)
            if(stack.length >=2 && stack[stack.length-1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }

        return stack.length;
    }
}
