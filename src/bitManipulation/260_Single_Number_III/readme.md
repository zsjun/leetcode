260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input: [1,2,1,3,2,5]
Output: [3,5]

Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

思考路程<br>
1 希望利用 137 的思路来获得，同样是获取每列有多少个 1，可是因为有两个，所以这里肯定得有两次，一次找出一个，可是还没想来如何进行找出<br>
2 题解
假设[1,2,1,3,2,5]
2.1 首先一次通过异或遍历，然后肯定是两个不同的3和5异或，结果就是1010，所以3和5肯定是有一个1的位置两者是不同的，比如3和5，肯定最高位就不同，一个是0，一个1，否则不可能异或出1<br>
2.2 <br>
Let a and b be the two unique numbers<br>
XORing all numbers gets you (a xor b)<br>
(a xor b) must be non-zero otherwise they are equal<br>
If bit_i in (a xor b) is 1, bit_i at a and b are different.<br>
Find bit_i using the low bit formula m & -m （这里是固定的，获取第一个1出现的位置，比如10&-10 = 2）<br>
Partition the numbers into two groups: one group with bit_i == 1 and the other group with bit_i == 0.<br>
a is in one group and b is in the other.<br>
a is the only single number in its group.<br>
b is also the only single number in its group.<br>
XORing all numbers in a's group to get a<br>
XORing all numbers in b's group to get b<br>
Alternatively, XOR (a xor b) with a gets you b.<br>

时间复杂度O（n）空间复杂度O（1）<br>

心得<br>
1 位运算感觉套路好多，最后还是要落到1和0上面

