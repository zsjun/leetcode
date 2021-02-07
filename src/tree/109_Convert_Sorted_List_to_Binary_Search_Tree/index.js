/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const toBST = (head, end) => {
  let low = head;
  let high = head;
  if (head === end) return null;
  while (high !== end && high.next !== end) {
    low = low.next;
    high = high.next.next;
  }
  let root = new TreeNode(low.val);
  root.left = toBST(head, low);
  root.right = toBST(low.next, end);
  return root;
};
export default (head) => {
  if (!head) return head;
  return toBST(head, null);
};
