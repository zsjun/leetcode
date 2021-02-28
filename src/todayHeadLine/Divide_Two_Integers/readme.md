29. Divide Two Integers
Difficulty:
Medium
Related Topics:

    Math
    Binary Search

Similar Questions:

Problem

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3

Example 2:

Input: dividend = 7, divisor = -3
Output: -2

Note:

    Both dividend and divisor will be 32-bit signed integers.
    The divisor will never be 0.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.


思考
1 思路很简单，但是使用正常的解法，发现一直超时。
2 通过题解，发现可以先找到一个倍数最接近被除数的，然后遍历，然后把结果加上倍数。
3 题目的关键是被除数减去除数的10倍，结果就要加上10，代码中利用一个数组，典型的空间换取时间。
