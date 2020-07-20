/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
[1, 4, 3, 2, 5, 2];
3;
export default (head, x) => {
  let slow = head;
  let fast = head;

  while (fast) {
    if (slow.val < x) {
      while (slow.next && slow.next.val < x) {
        slow = slow.next;
      }
    }
    if (slow && slow.next) {
      fast = slow.next;
    } else {
      return head;
    }
    if (fast.val >= x) {
      while (fast.next && fast.next.val >= x) {
        fast = fast.next;
      }
    }

    if (fast.next !== null) {
      if (fast.next.next === null) {
        const temp = slow.next;
        slow.next = fast.next;
        fast.next = temp;
        temp.next = null;
      } else {
        const temp = slow.next;
        const temp1 = fast.next.next;
        slow.next = fast.next;
        fast.next = temp;
        temp.next = temp1;
      }
    } else {
      return head;
    }
  }
  return head;
};
