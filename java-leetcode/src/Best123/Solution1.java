package Best123;

//Runtime: 9 ms, faster than 21.34% of Java online submissions for Best Time to Buy and Sell Stock III.
// Memory Usage: 49.1 MB, less than 85.11% of Java online submissions for Best Time to Buy and Sell Stock III.
class Solution1 {
    public int maxProfit(int[] prices) {
        int buy1 = Integer.MAX_VALUE, buy2 = Integer.MAX_VALUE;
        int sell1 = 0, sell2 = 0;
        for (int i = 0; i < prices.length; i++) {
            buy1 = Math.min(buy1, prices[i]);
            sell1 = Math.max(sell1, prices[i] - buy1);
            buy2 = Math.min(buy2, prices[i] - sell1);
            sell2 = Math.max(sell2, prices[i] - buy2);
        }
        return sell2;
    }
    public static void main(String[] args) {
        Solution1 solution = new Solution1();
        int res = solution.maxProfit(new int[] {1,2,3,4,5});
        System.out.println(res);
    }
}