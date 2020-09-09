338. Counting Bits

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]

Example 2:

Input: 5
Output: [0,1,1,2,1,2]

Follow up:

    It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
    Space complexity should be O(n).
    Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

思考
1 dp[i] 和 dp[i-1]的关系, 很简单 dp[i] = dp[i-1].push(n 中含有 1 的个数)<br/>
这里有个诀窍就是 n & n-1 中含有 1 的个数等于 n 中含有 1 的个数+1<br/>
count1bitNum(n & n-1) = count1bitNum(n) - 1<br/>
比如 count1bitNum(6 & 5) = count1bitNum(6) - 1 =>count1bitNum(4) = count1bitNum(6) - 1<br/>

为什么呢？<br/>
因为 n&n-1 就是相当于去掉 n 的最后一个 1，比如 6 & 5 = 110 & 101 = 100，刚好去掉 6 也就是 110 的最后一个 1<br/>

时间复杂度 O（n）空间复杂度 O（n）
