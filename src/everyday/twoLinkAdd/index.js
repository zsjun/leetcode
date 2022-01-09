function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let c = 0;
  let t = new ListNode(0);
  const newHead = t;
  while (c || l1 || l2) {
    c += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    t.next = new ListNode(c % 10);
    t = t.next;
    c = Math.floor(c / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return newHead.next;
};
