//Linked List Cycle Detection

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let seen = new Set();
        let curr= head;
        while(curr){
            if(!seen.has(curr)){
                seen.add(curr)
            }
            else return true;

            curr= curr.next;
        }

        return false;
    }
}
//Time Complexity: o(n) Space COmplexity O(n)