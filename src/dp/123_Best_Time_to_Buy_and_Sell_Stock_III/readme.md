123. Best Time to Buy and Sell Stock III

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Example 4:

Input: prices = [1]
Output: 0

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 105
  

思考：
More readable code with clearer explanation:
For instance, in the case 3,3,5,0,0,3,1,4:

    the max profit is (4 - 1) + (3 - 0), which is also equal to 4 - (1 - (3 - 0))
    '0' is the min of cost1, (3 - 0) is the profit1, (1 - (3 - 0)) is the cost2, and 4 - (1 - (3 - 0)) is the profit2
    this also works for the increasing sequence, say, 1,2,3,4, the max profit is 4 - (4 - (4 - 1))
    in order to get the max profit eventually, profit1 must be as relatively most as possible to produce a small cost2, and therefore cost2 can be as less as possible to give us the final max profit2. So now we understand why and where we need to take min or max of all cost and profit variables.....
    Here is my code rewritten based on @SmileChen 's previous post:

也就是说必须如果在最后想要得到最大的值，cost2必须是最小，profit1必须最大，cost1必须最小，依次类推。

