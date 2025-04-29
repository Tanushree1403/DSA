class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res="";
        let length=0;
        for (let s of strs){
            res+=s.length+"#"+s;
        }
        return res;
    }

    /**
     * @param {string} str
     #* @returns {string[]} 4#neet4#code4#love3#you
     */
    decode(str) {
        const res =[];
        let i=0;
        while(i<str.length){
            let j=i;

            while(str[j]!=="#"){
                j++;
            }

            let length= parseInt(str.substring(i,j))
            i=j+1;
            j=i+length;
            res.push(str.substring(i,j));
            i=j;
        }
        return res;
    }
}
