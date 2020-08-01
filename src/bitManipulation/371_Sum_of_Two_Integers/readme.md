371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1

思考路程<br>
1 利用 32 位置异或，不断地判断每个位的数字是 0 还是 1
2 题解<br>
2.1 相加但不进位，1^0=1，1^1=0，0^0=0，所以第一步用异或。<br>
2.2 只求进位的结果，只有两个 1 才会进位，所以用&，然后左移 1 位，表示要进的位。<br>
2.3 把前两步的结果再重复 1，2 步，直到没有进位产生，即 b=0<br>

算法复杂度 O(n) 空间复杂度 O（1）<br>

心得<br>
1 位运算的真谛就是要确定每个位置是 0 还是 1
