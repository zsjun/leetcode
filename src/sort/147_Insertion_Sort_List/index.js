/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  Input: 4->2->1->3
//  Output: 1->2->3->4
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function print(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
export default (head) => {
  if (head == null) {
    return head;
  }
  // 添加一个节点
  let helper = new ListNode(0);
  // 旧链表的起点
  let oldCurrentPoint = head;
  // 在新链表起点
  let newBeginPoint = helper;

  let next = null;

  while (oldCurrentPoint != null) {
    next = oldCurrentPoint.next;
    // 在新链表中，遍历如果小于，则下一个
    while (newBeginPoint.next != null && newBeginPoint.next.val < oldCurrentPoint.val) {
      newBeginPoint = newBeginPoint.next;
    }
    // 当找到的时候
    // 插入新链表
    oldCurrentPoint.next = newBeginPoint.next;
    newBeginPoint.next = oldCurrentPoint;
    // 还是从头开始
    newBeginPoint = helper;
    oldCurrentPoint = next;
  }

  return print(helper.next);
};
