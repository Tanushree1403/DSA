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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var dummy = new ListNode(-1);
        var node= dummy;
        var carry=0;
        while(l1 ||l2 || carry){
            node.next =new ListNode();
            node=node.next;
            const v1 = l1 ? l1.val:0;
            const v2 = l2 ? l2.val:0;
            if(v1+v2+carry <= 9){
                node.val = v1+v2+carry;
                carry=0;
            }
            else{
                node.val =  (v1+v2+carry) -10;
                carry =1;
            }

            l1= l1? l1.next:null; l2= l2? l2.next:null;
        }

        return dummy.next;
    }
}
