/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 链表的处理最好有个空链表头
//
export default (head, k) => {
  if (head == null || head.next == null) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  let len;
  for (
    len = 0;
    fast.next != null;
    len++ //Get the total length
  ) {
    fast = fast.next;
  }

  for (
    let j = len - (n % len);
    j > 0;
    j-- //Get the len-n%i th node
  ) {
    slow = slow.next;
  }

  fast.next = dummy.next; //Do the rotation
  dummy.next = slow.next;
  slow.next = null;

  return dummy.next;
};
