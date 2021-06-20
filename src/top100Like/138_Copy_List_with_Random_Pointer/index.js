/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 export default (head) => {
   if (head === null) return null;
   const map = new Map()


   // loop 1. copy all the nodes
   let node = head;
   while (node !== null) {
     map.put(node, new RandomListNode(node.label));
     node = node.next;
   }

   // loop 2. assign next and random pointers
   node = head;
   while (node != null) {
     map.get(node).next = map.get(node.next);
     map.get(node).random = map.get(node.random);
     node = node.next;
   }

   return map.get(head);
 }