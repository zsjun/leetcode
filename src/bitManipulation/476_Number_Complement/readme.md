476. Number Complement

Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:

Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

Constraints:

The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
num >= 1
You could assume no leading zero bit in the integer’s binary representation.
This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

思考过程<br/>
1 比如 5 输出 2，其实就是 5 的二进制 101 和 111 的异或，而 1 输出 0，也是 1 和 1 的异或结果,所以如何或缺 111 呢？

可以利用 Math.pow 来获取
