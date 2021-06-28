package Best122;

public class Solution {
    public int maxProfit(int[] prices) {
        int res = 0;
        for (int i = 1; i < prices.length; ++i)
            res += Math.max(prices[i] - prices[i - 1], 0);
        return res;
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int res = solution.maxProfit(new int[] {1,2,3,9,0});
        System.out.println(res);
    }
}