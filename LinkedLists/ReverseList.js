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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev =null;
        let curr =head;
        while (curr){
           let temp= curr.next; // get existing current
           curr.next= prev; // swap next with previous
           prev = curr;
           curr= temp; // move to the next loop.

        }
        return prev;
    }
}
