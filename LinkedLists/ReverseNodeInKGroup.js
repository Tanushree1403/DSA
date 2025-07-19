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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        //if k=1 return head
        var dummy = new ListNode(0,head);
        let groupPrev = dummy;
        while(true){
            const kth = this.getKthNode(groupPrev,k);
            // if number of nodes are less than k then the Kth term will be null
            if(!kth) break; // this means we have reached end of the list.
                            
            const groupNext = kth.next; //get this pointer as the next term of rest of the list
            //reverse a LL
            let prev = kth.next;// start of new group ll
            let curr = groupPrev.next; // head of LL
            // if the curr reaches the first element of the next group this means we have traveresed the first group completely
            while(curr != groupNext){ 
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr= tmp;
            }
            const tmp = groupPrev.next;
            groupPrev.next = kth; // reassign the head of my group as the next node in the list
            groupPrev = tmp;
        }

        return dummy.next;
        
    }

    getKthNode(curr, k){
        while(k>0 && curr){
            curr = curr.next;
            k--;
        }
        return curr;
    }
}