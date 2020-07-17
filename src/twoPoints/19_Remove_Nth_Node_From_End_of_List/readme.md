19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

思考路程
1 这个很简单，用两个指针，一个快，一个慢，相差 n, 当快指针到头之后，就可以删除对应的元素

算法时间复杂度 O（n）空间复杂度 O（1）
