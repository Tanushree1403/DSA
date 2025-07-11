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
     * @return {void}
     */
    reorderList(head) {
        let slow = head; 
        let fast = head.next;
        while(fast!==null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            //split the LL into two seperate LL 
            //using fast and slow poiters
        }
        let second = slow.next // second list; 3>4>5
        let first = head //first list 0>1>2

        //delinking the second list from the first
        let prev= (slow.next = null); //prev will now hold the value null.
        // reversing the LL
        while( second !== null){ // 3>4>5
            const tmp = second.next; //store the next node //nextnode= curr.next
            second.next = prev;  //reverse the pointer
            prev = second // move prev forward
            second= tmp; // move curr forward
            // reverse a linked list
            //let nextNode = curr.next; // store next
            //curr.next = prev;         // reverse pointer
            //prev = curr;              // move prev forward
            //curr = nextNode;          // move curr forward
        }
        //5>4>3
    }
}
