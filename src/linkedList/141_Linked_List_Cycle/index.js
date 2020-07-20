/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default (head) => {
  if (!head) return false;
  let slow = head;
  let quick = slow.next;
  if (quick === slow) {
    return true;
  } else {
    if (quick && quick.next !== slow) {
      quick = quick.next;
    } else if (quick && quick.next === slow) {
      return true;
    }
  }
  while (slow && quick) {
    slow = slow.next;
    if (quick.next) {
      quick = quick.next;
    } else {
      return false;
    }
    if (quick && quick.next) {
      quick = quick.next;
    } else {
      return false;
    }

    if (slow === quick) return true;
  }
  return false;
};
