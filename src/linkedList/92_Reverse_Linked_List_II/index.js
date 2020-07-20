/**
 Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @r
 **/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
[3, 5];
export const getArr = (head) => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};
export const creatLinkList = (arr = []) => {
  let listNode = new ListNode(arr[arr.length - 1]);
  // const head = listNode;
  for (let j = 0; j < arr.length - 1; j++) {
    const tempNode = new ListNode(arr[j], listNode);
    listNode = tempNode;
  }
  return listNode;
};

export default (head, m, n) => {
  let point = head;
  let first = head;
  let begin = m;
  while (point && begin !== 1) {
    first = point;
    point = point.next;
    begin--;
  }
  let k = n - m + 1;
  let pre = null;
  let last = point;
  while (k !== 0 && point) {
    const temp = point.next;
    point.next = pre;
    pre = point;
    point = temp;
    k--;
  }

  if (first) {
    first.next = pre;
  }
  if (last) {
    last.next = point;
  }
  if (point === null && !first) {
    head = pre;
  }
  // while (head) {
  //   console.log("1", head.val);
  //   head = head.next;
  // }
  // if (point.next === null) {
  //   head = point;
  // }

  return head;
};
