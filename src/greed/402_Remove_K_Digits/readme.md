402. Remove K Digits

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

思考路程
1 因为想要最小的，那肯定是高位是越小，则留下的数字越小，利用贪心算法，从高位往后，删掉大的，比如14，则删掉4就可以了

2 按照1的思路写出来，感觉有些测试用例过不了，而且逻辑复杂，自己都搞乱了，后来想了下，应该是如果升序，则删掉最大的，如果是降序，则删掉本身

时间复杂度0（n） 空间复杂度O（n）

心得
1 如果算法自己写起来，感觉逻辑越来越复杂，就说明算法本身有问题，需要重新寻找逻辑
