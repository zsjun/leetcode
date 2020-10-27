import { TreeNode, serialize } from "../../../src/top_interview/297_Serialize_and_Deserialize_Binary_Tree/index";

test("1", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.right = new TreeNode(4);
  console.log(serialize(root));
});
