// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const myMap = new Map();
        myMap.set(null,null);

        let curr = head;

        while(curr){
            const copy = new Node(curr.val)
            myMap.set(curr,copy);
            curr= curr.next;
        }

        curr = head;
        while(curr){
            const copy= myMap.get(curr);
            copy.next = myMap.get(curr.next);
            copy.random = myMap.get(curr.random);
            curr = curr.next;
        }

        return myMap.get(head);
    }
}
