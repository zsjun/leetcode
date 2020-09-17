213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
because they are adjacent houses.

Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

思考
1 如果没有环，是很好的解决的，可是加上环，自己就没想到如何解决了。 看了解答，才知道直接转化成简单的两个数组就好了，也就是抢劫第一家和不抢劫第一家，然后就变成了两个数组了，如果是抢劫第一家，则肯定是不抢劫最后一家，如果不抢劫第一家，则肯定抢劫最后一家。

为什么没有想到呢？
转化，根据已经知道的，解决不知道了，先找到问题，然后定义好问题。


