package Recover;

import javax.swing.tree.TreeNode;

/**
 * @author zsj
 * @create 2022 01 下午2:17
 */
public class Solution1 {
    public void recoverTree(TreeNode root) {
        TreeNode pre = null;
        TreeNode first = null, second = null;
        // Morris Traversal，使用常数空间进行遍历
        TreeNode temp = null;
        // 如果遍历没有结束，则继续遍历
        while(root!=null){
            // 如果左子树不为空，则找到当前节点的前驱节点
            if(root.left!=null){
                // connect threading for root
                temp = root.left;
                // temp的right不是当前节点
                while(temp.right!=null && temp.right != root) {
                    temp = temp.right;
                }
                // the threading already exists
                // 如果发现已经有了
                if(temp.right!=null){
                    if(pre!=null && pre.val > root.val){
                        if(first==null){first = pre;second = root;}
                        else{second = root;}
                    }
                    pre = root;
                    temp.right = null;
                    root = root.right;
                }else{
                    // temp.right = root
                    temp.right = root;
                    root = root.left;
                }
            }else{
                if(pre!=null && pre.val > root.val){
                    if(first==null){first = pre;second = root;}
                    else{second = root;}
                }
                pre = root;
                root = root.right;
            }
        }
        // swap two node values;
        if(first!= null && second != null){
            int t = first.val;
            first.val = second.val;
            second.val = t;
        }
    }
}
