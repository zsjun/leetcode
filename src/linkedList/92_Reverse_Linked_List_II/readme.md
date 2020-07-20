92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

思考路程
1 这题标记是简单，但是还是没搞出来，本来想先逆转一个链表，然后再寻找，发现这样根本不行

2 看了题解，才明白，可以通过计算 headA 和 headB 走的路程来计算出位置，这有点和龟兔赛跑算法有点类似，
简直太牛逼了。
