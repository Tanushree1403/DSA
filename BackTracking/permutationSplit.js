/*
You walk through the string and at every position decide:

“Should I cut here — if the substring I’ve built so far is a palindrome?”

If yes → add that substring to the current path and recurse on the rest.

j = start index of the current substring you’re trying to form

i = current end index you’re checking right now

So at any moment, you’re asking:

“Is s[j..i] a palindrome? If yes, I can cut here.”

Then you move on to the next substring starting at i+1.
 */
class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        const res =[];
        const part =[];

        const dfs= (j,i) =>{

            if(i >= s.length){
                if(i===j){
                    res.push([...part]);
                }
                return;
            }

            if(this.isPali(s,j,i)){
                part.push(s.substring(j,i+1));
                dfs(i+1,i+1);
                part.pop();
            }

            dfs(j,i+1); // if not a palindrome

        };

        dfs(0,0)
        return res;

    }

    isPali(s,l,r){
        while(l<r){
            if(s[l] !== s[r]) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    
}
