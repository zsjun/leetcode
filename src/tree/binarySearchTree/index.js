class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }
  insert(val) {
    this.insertNode(this.root, new CreateNode(val));
  }
  insertNode(node, newNode) {
    // 如果节点大于新节点的值
    if (node.val > newNode.val) {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else if (node.val < newNode.val) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }
  // 中序遍历
  inOrderTraverce() {
    const res = [];
    this.inOrderTraverceNodes(this.root, res);
    return res;
  }
  inOrderTraverceNodes(node, res) {
    if (node) {
      this.inOrderTraverceNodes(node.left, res);
      res.push(node.val);
      this.inOrderTraverceNodes(node.right, res);
    }
  }
  // 前序排列
  preOrderTraverce() {
    const res = [];
    this.preOrderTraverceNodes(this.root, res);
    return res;
  }
  preOrderTraverceNodes(node, res) {
    if (node) {
      res.push(node.val);
      this.preOrderTraverceNodes(node.left, res);
      this.preOrderTraverceNodes(node.right, res);
    }
  }

  //后序遍历
  afterOrderTraverce() {
    const res = [];
    this.afterOrderTraverceNodes(this.root, res);
    return res;
  }
  afterOrderTraverceNodes(node, res) {
    if (node) {
      this.afterOrderTraverceNodes(node.left, res);
      this.afterOrderTraverceNodes(node.right, res);
      res.push(node.val);
    }
  }

  //层次遍历
  levelOrderTraverce() {
    const res = [];
    const quene = [this.root];
    let node = null;
    while (quene.length > 0) {
      node = quene.shift();
      res.push(node.val);
      if (node && node.left) {
        quene.push(node.left);
      }
      if (node && node.right) {
        quene.push(node.right);
      }
    }
    return res;
  }

  //查询最小值：找到最左边的节点
  findMin() {
    return this.min(this.root);
  }
  min(node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node.val;
    } else {
      return null;
    }
  }

  //查询最大值：找到最左边的节点
  findMax() {
    return this.max(this.root);
  }
  max(node) {
    if (node) {
      while (node.right) {
        node = node.right;
      }
      return node.val;
    } else {
      return null;
    }
  }

  //查找特定值
  find(val) {
    return this.findVal(this.root, val);
  }
  findVal(node, val) {
    if (!node) {
      return false;
    }
    if (node.val < val) {
      return this.findVal(node.right, val);
    } else if (node.val > val) {
      return this.findVal(node.left, val);
    } else {
      return true;
    }
  }

  remove(val) {
    this.removeNode(this.root, val);
  }
  // 找到最小值的节点
  findMinNode(node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    } else {
      return null;
    }
  }
  // 删除节点的方法
  removeNode(node, val) {
    if (!node) {
      return null;
    }
    if (node.val > val) {
      node.left = this.removeNode(node.left, val);
      return node;
    } else if (node.val < val) {
      node.right = this.removeNode(node.right, val);
      return node;
    } else {
      // 找到需要删除的节点后
      // 第一种，如果是叶子节点，那么可以直接删除
      if (!node.left && !node.right) {
        node = null;
        return null;
        // 如果有左节点，没有右节点，直接把node删除，然后
      } else if (node.left && !node.right) {
        node = node.left;
        return node;
        // 如果有右节点，没有左节点，
      } else if (!node.left && node.right) {
        //删除只有右节点的节点 => 将右节点替换需删除节点
        node = node.right;
        return node;
        // 同时存在左右节点
      } else {
        // 在右子树中找到最小值节点
        const minNode = this.findMinNode(node.right);
        // 最小值节点的值 赋给 被删除点的值，即完成替换
        node.val = minNode.val;
        // 替换后删除最小值节点
        node.right = this.removeNode(node.right, minNode.val);
        return node;
      }
    }
  }
}
