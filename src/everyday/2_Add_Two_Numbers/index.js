function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Runtime: 147 ms, faster than 42.75% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 44.1 MB, less than 62.05% of JavaScript online submissions for Add Two Numbers.
var addTwoNumbers = function (l1, l2) {
  let newHead = new ListNode(0);
  let curr = newHead;
  let flag = 0;
  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const val =
      l1Val + l2Val + flag >= 10
        ? l1Val + l2Val + flag - 10
        : l1Val + l2Val + flag;
    flag = l1Val + l2Val + flag >= 10 ? 1 : 0;
    curr.next = new ListNode(val);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (flag === 1) {
    curr.next = new ListNode(flag);
  }
  // console.log(newHead)
  return newHead.next;
};
