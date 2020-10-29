const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// 构建一个trie树，从而查找，思路很简单
// Y 最长的字符串长度
// X words的长度
// 字符串操作使用，trie树，算法时间复杂度O（4 * min（Y，mn）* mn）
// 空间复杂度 O（26Y）
export default (board, words) => {
  let res = [];
  const m = board.length;
  const n = board[0].length;

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) {
          node[c] = {};
        }
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null;
    }
    if (x < 0 || x >= m || y < 0 || y >= n) return;

    const c = board[x][y];
    if (c === "#" || node[board[x][y]] == null) return;

    board[x][y] = "#"; // Mark visited
    // 四个方向查找
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      search(root, i, j);
    }
  }
  return res;
};
