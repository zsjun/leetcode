457. Circular Array Loop

You are given a circular array nums of positive and negative integers. If a number k at an index is positive, then move forward k steps. Conversely, if it's negative (-k), move backward k steps. Since the array is circular, you may assume that the last element's next element is the first element, and the first element's previous element is the last element.

Determine if there is a loop (or a cycle) in nums. A cycle must start and end at the same index and the cycle's length > 1. Furthermore, movements in a cycle must all follow a single direction. In other words, a cycle must not consist of both forward and backward movements.



Example 1:

Input: [2,-1,1,2,2]
Output: true
Explanation: There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.
Example 2:

Input: [-1,2]
Output: false
Explanation: The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.

Example 3:

Input: [-2,1,-1,-2,-2]
Output: false
Explanation: The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement, but movement from index 2 -> 1 is a backward movement. All movements in a cycle must follow a single direction.


Note:

-1000 ≤ nums[i] ≤ 1000
nums[i] ≠ 0
1 ≤ nums.length ≤ 5000


思考路程
1 看到形成闭环，首先想到了如何判断一个链表是闭环的题目，但是这里好像不知道如何使用。
2 使用回溯法，也就是暴力法，一遍遍的重试，直到找到或者找不到
3 看了题解，有两个疑问，
3.1 如何一个指针走一步，另外一个指针走两步？
理解错了题目，以为是当nums[i] = k的时候，可以向前面走<=k的任何步骤，如果是一定可以走k步，那肯定可以用验证一个链表是不是闭环的方法
