class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let myMap= new Map();
        for(let i=0; i<numbers.length;i++){
            const num2= target-numbers[i];
            if(myMap.get(num2)){
                return [myMap.get(num2),i+1];
            }
            else{
                myMap.set(numbers[i],i+1);
            }
        }
    }
}
