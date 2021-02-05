/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
// Runtime: 100 ms, faster than 58.06% of JavaScript online submissions for Construct Binary Tree from Preorder and Postorder Traversal.
// Memory Usage: 42.8 MB, less than 8.60% of JavaScript online submissions for Construct Binary Tree from Preorder and Postorder Traversal.
const constructFromPrePost = (pre, post) => {
  if (pre.length > 0) {
    const root = new TreeNode(pre.shift());
    post.pop();
    const rootVal = post[post.length - 1];
    const index = pre.indexOf(rootVal);
    const pre1 = pre.slice(0, index);
    const pre2 = pre.slice(index);
    const index1 = post.indexOf(pre1[0]);
    const post1 = post.slice(0, index);
    const post2 = post.slice(index);
    console.log(pre1, post1);
    console.log(pre2, post2);
    root.left = constructFromPrePost(pre1, post1);
    root.right = constructFromPrePost(pre2, post2);
    return root;
  } else {
    return null;
  }
};
export default constructFromPrePost;
