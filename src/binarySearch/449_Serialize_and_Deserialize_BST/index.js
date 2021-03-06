var serialize = function (root) {
  function travel(root, arr) {
    if (!root) return null;
    if (root) {
      arr.push(root.val);
    }
    if (root && root.left) {
      travel(root.left, arr);
    }
    if (root && root.right) {
      travel(root.right, arr);
    }
  }

  let res = [];

  travel(root, res);
  return res.join("#");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  let res = data.split("#");

  // return res

  function insert(root, val) {
    if (root.val < val) {
      if (!root.right) {
        const node = new TreeNode(val);
        root.right = node;
      } else {
        insert(root.right, val);
      }
    }
    if (root.val > val) {
      if (!root.left) {
        const node = new TreeNode(val);
        root.left = node;
      } else {
        insert(root.left, val);
      }
    }
  }
  const rootNode = new TreeNode(res[0]);
  for (let i = 1; i < res.length; i++) {
    insert(rootNode, +res[i]);
  }
  return rootNode;
};
