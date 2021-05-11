/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  // base case
  let pre = null;
  let current = head;
  while (current) {
    let temp = current;
    current = current.next;
    temp.next = pre;
    pre = temp;
  }
  return pre;
};

export default reverseList;
