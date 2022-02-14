function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const rescrue = (pre, head) => {
  // console.log(pre,head)
  if (head) {
    let next = head.next;
    if (!next) {
      return;
    }
    pre.next = next;

    // console.log(next)
    head.next = next.next;
    next.next = head;
    rescrue(head, head.next);
  }
};
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = new ListNode();
  const currentHead = pre;

  rescrue(pre, head);
  return pre.next;
};
