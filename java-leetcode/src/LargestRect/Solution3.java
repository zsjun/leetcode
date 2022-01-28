package LargestRect;

import java.util.Stack;

/**
 * @author zsj
 * @create 2022 01 下午2:59
 */
public class Solution3 {
    public int largestRectangleArea(int[] heights) {
        int len = heights.length;
        int max = 0;
        if(heights == null || len == 0) {
            return max;
        }
        Stack<Integer> s = new Stack<>();

        for(int i = 0;i<=len;i++) {
            int height = i == len ? 0 : heights[i];
            if(s.isEmpty() || height>=heights[s.peek()]) {
                s.push(i);
            }else {
                int tp = s.pop();
                int maxArea = heights[tp] * (s.isEmpty() ? i : i -1- s.peek());
                max = Math.max(maxArea, max);
                i--;
            }
        }
        return max;
    }
}
