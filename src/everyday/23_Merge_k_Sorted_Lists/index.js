/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const merge = (list1, list2) => {
  if (!list1 || !list2) return list1 || list2;
  let node = new ListNode(null);
  const root = node;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  if (list1) node.next = list1;
  if (list2) node.next = list2;
  return root.next;
};

var mergeKLists = function (lists) {
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root || null;
};
