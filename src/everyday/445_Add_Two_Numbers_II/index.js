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
var reverseList = function (head) {
  if (!head) return null;
  const nextNode = reverseList(head.next);
  if (head.next) {
    head.next.next = head;
    head.next = null;
  } else {
    return head;
  }
  return nextNode;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head1 = reverseList(l1);
  let head2 = reverseList(l2);
  let flag = 0;
  let dummy = new ListNode(0);
  let cur = dummy;

  while (head1 || head2) {
    const head1Val = head1 ? head1.val : 0;
    const head2Val = head2 ? head2.val : 0;
    const sum = head1Val + head2Val + flag;
    flag = sum >= 10 ? 1 : 0;
    const newVal = sum >= 10 ? sum - 10 : sum;
    const newNode = new ListNode(newVal);
    cur.next = newNode;
    cur = newNode;
    head1 = head1 ? head1.next : null;
    head2 = head2 ? head2.next : null;
  }
  if (!head1 && !head2 && flag === 1) {
    cur.next = new ListNode(1);
    cur = cur.next;
  }
  const newHead = reverseList(dummy.next);
  dummy.next = null;
  return newHead;
};
